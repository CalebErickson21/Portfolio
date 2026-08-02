import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { renderToString } from "react-dom/server";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Icon {
	x: number;
	y: number;
	z: number;
	scale: number;
	opacity: number;
	id: number;
}

interface IconCloudProps {
	icons?: React.ReactNode[];
	images?: string[];
	showControl?: boolean;
	/** Canvas width/height in pixels */
	size?: number;
	/** Drawn icon size in pixels */
	iconSize?: number;
	className?: string;
}

function easeOutCubic(t: number): number {
	return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({
	icons,
	images,
	showControl = true,
	size = 400,
	iconSize = 40,
	className,
}: IconCloudProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [iconPositions, setIconPositions] = useState<Icon[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [targetRotation, setTargetRotation] = useState<{
		x: number;
		y: number;
		startX: number;
		startY: number;
		distance: number;
		startTime: number;
		duration: number;
	} | null>(null);
	const animationFrameRef = useRef<number>(0);
	const rotationRef = useRef({ x: 0, y: 0 });
	const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
	const imagesLoadedRef = useRef<boolean[]>([]);
	const halfIcon = iconSize / 2;
	const sphereRadius = size * 0.28;

	// Pause animation if user prefers reduced motion
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (mediaQuery.matches) {
			setIsPaused(true);
		}

		const handleChange = (e: MediaQueryListEvent) => {
			setIsPaused(e.matches);
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// Create icon canvases once when icons/images change
	useEffect(() => {
		if (!icons && !images) return;

		const items = icons ?? images ?? [];
		imagesLoadedRef.current = new Array(items.length).fill(false);

		const newIconCanvases = items.map((item, index) => {
			const offscreen = document.createElement("canvas");
			offscreen.width = iconSize;
			offscreen.height = iconSize;
			const offCtx = offscreen.getContext("2d");

			if (offCtx) {
				if (images) {
					const img = new Image();
					img.crossOrigin = "anonymous";
					img.src = items[index] as string;
					img.onload = () => {
						offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

						offCtx.beginPath();
						offCtx.arc(halfIcon, halfIcon, halfIcon, 0, Math.PI * 2);
						offCtx.closePath();
						offCtx.clip();

						offCtx.drawImage(img, 0, 0, iconSize, iconSize);

						imagesLoadedRef.current[index] = true;
					};
				} else {
					offCtx.scale(iconSize / 100, iconSize / 100);
					const svgString = renderToString(item as React.ReactElement);
					const img = new Image();
					img.src = "data:image/svg+xml;base64," + btoa(svgString);
					img.onload = () => {
						offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
						offCtx.drawImage(img, 0, 0);
						imagesLoadedRef.current[index] = true;
					};
				}
			}
			return offscreen;
		});

		iconCanvasesRef.current = newIconCanvases;
	}, [icons, images, iconSize, halfIcon]);

	// Generate initial icon positions on a sphere
	useEffect(() => {
		const items = icons ?? images ?? [];
		const newIcons: Icon[] = [];
		const numIcons = items.length || 20;

		const offset = 2 / numIcons;
		const increment = Math.PI * (3 - Math.sqrt(5));

		for (let i = 0; i < numIcons; i++) {
			const y = i * offset - 1 + offset / 2;
			const r = Math.sqrt(1 - y * y);
			const phi = i * increment;

			const x = Math.cos(phi) * r;
			const z = Math.sin(phi) * r;

			newIcons.push({
				x: x * sphereRadius,
				y: y * sphereRadius,
				z: z * sphereRadius,
				scale: 1,
				opacity: 1,
				id: i,
			});
		}
		setIconPositions(newIcons);
	}, [icons, images, sphereRadius]);

	const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		const rect = canvas?.getBoundingClientRect();
		if (!rect || !canvas) return;

		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;
		const x = (e.clientX - rect.left) * scaleX;
		const y = (e.clientY - rect.top) * scaleY;

		iconPositions.forEach((icon) => {
			const cosX = Math.cos(rotationRef.current.x);
			const sinX = Math.sin(rotationRef.current.x);
			const cosY = Math.cos(rotationRef.current.y);
			const sinY = Math.sin(rotationRef.current.y);

			const rotatedX = icon.x * cosY - icon.z * sinY;
			const rotatedZ = icon.x * sinY + icon.z * cosY;
			const rotatedY = icon.y * cosX + rotatedZ * sinX;

			const screenX = canvas.width / 2 + rotatedX;
			const screenY = canvas.height / 2 + rotatedY;

			const depthScale = (rotatedZ + 200) / 300;
			const radius = halfIcon * depthScale;
			const dx = x - screenX;
			const dy = y - screenY;

			if (dx * dx + dy * dy < radius * radius) {
				const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z));
				const targetY = Math.atan2(icon.x, icon.z);

				const currentX = rotationRef.current.x;
				const currentY = rotationRef.current.y;
				const distance = Math.sqrt(
					Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
				);

				const duration = Math.min(2000, Math.max(800, distance * 1000));

				setTargetRotation({
					x: targetX,
					y: targetY,
					startX: currentX,
					startY: currentY,
					distance,
					startTime: performance.now(),
					duration,
				});
				return;
			}
		});

		setIsDragging(true);
		setLastMousePos({ x: e.clientX, y: e.clientY });
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		const rect = canvas?.getBoundingClientRect();
		if (rect && canvas) {
			const scaleX = canvas.width / rect.width;
			const scaleY = canvas.height / rect.height;
			setMousePos({
				x: (e.clientX - rect.left) * scaleX,
				y: (e.clientY - rect.top) * scaleY,
			});
		}

		if (isDragging) {
			const deltaX = e.clientX - lastMousePos.x;
			const deltaY = e.clientY - lastMousePos.y;

			rotationRef.current = {
				x: rotationRef.current.x + deltaY * 0.002,
				y: rotationRef.current.y + deltaX * 0.002,
			};

			setLastMousePos({ x: e.clientX, y: e.clientY });
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (canvas && ctx) {
			const animate = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				const centerX = canvas.width / 2;
				const centerY = canvas.height / 2;
				const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
				const dx = mousePos.x - centerX;
				const dy = mousePos.y - centerY;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const speed = 0.003 + (distance / maxDistance) * 0.01;

				if (targetRotation) {
					const elapsed = performance.now() - targetRotation.startTime;
					const progress = Math.min(1, elapsed / targetRotation.duration);
					const easedProgress = easeOutCubic(progress);

					rotationRef.current = {
						x:
							targetRotation.startX +
							(targetRotation.x - targetRotation.startX) * easedProgress,
						y:
							targetRotation.startY +
							(targetRotation.y - targetRotation.startY) * easedProgress,
					};

					if (progress >= 1) {
						setTargetRotation(null);
					}
				} else if (!isDragging && !isPaused) {
					rotationRef.current = {
						x: rotationRef.current.x + (dy / canvas.height) * speed,
						y: rotationRef.current.y + (dx / canvas.width) * speed,
					};
				}

				iconPositions.forEach((icon, index) => {
					const cosX = Math.cos(rotationRef.current.x);
					const sinX = Math.sin(rotationRef.current.x);
					const cosY = Math.cos(rotationRef.current.y);
					const sinY = Math.sin(rotationRef.current.y);

					const rotatedX = icon.x * cosY - icon.z * sinY;
					const rotatedZ = icon.x * sinY + icon.z * cosY;
					const rotatedY = icon.y * cosX + rotatedZ * sinX;

					const scale = (rotatedZ + 200) / 300;
					const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

					ctx.save();
					ctx.translate(canvas.width / 2 + rotatedX, canvas.height / 2 + rotatedY);
					ctx.scale(scale, scale);
					ctx.globalAlpha = opacity;

					if (icons || images) {
						if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
							ctx.drawImage(
								iconCanvasesRef.current[index],
								-halfIcon,
								-halfIcon,
								iconSize,
								iconSize,
							);
						}
					} else {
						ctx.beginPath();
						ctx.arc(0, 0, halfIcon, 0, Math.PI * 2);
						ctx.fillStyle = "#4444ff";
						ctx.fill();
						ctx.fillStyle = "white";
						ctx.textAlign = "center";
						ctx.textBaseline = "middle";
						ctx.font = "16px Arial";
						ctx.fillText(`${icon.id + 1}`, 0, 0);
					}

					ctx.restore();
				});

				const hasPendingAssets =
					Boolean(icons || images) && !imagesLoadedRef.current.every((loaded) => loaded);
				const shouldContinue =
					!isPaused || isDragging || targetRotation !== null || hasPendingAssets;

				if (shouldContinue) {
					animationFrameRef.current = requestAnimationFrame(animate);
				}
			};

			animate();
		}

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [
		icons,
		images,
		iconPositions,
		isDragging,
		isPaused,
		mousePos,
		targetRotation,
		halfIcon,
		iconSize,
	]);

	return (
		<div className={cn("relative inline-block max-w-full", className)}>
			<canvas
				ref={canvasRef}
				width={size}
				height={size}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				className="h-auto w-full rounded-lg"
				aria-label="Interactive 3D Icon Cloud"
				role="img"
			/>
			{showControl && (
				<Button
					variant="outline"
					size="icon"
					onClick={() => setIsPaused(!isPaused)}
					aria-label={isPaused ? "Play Animation" : "Pause Animation"}
					className="absolute top-2 right-2"
				>
					{isPaused ? <Play size={16} /> : <Pause size={16} />}
				</Button>
			)}
		</div>
	);
}
