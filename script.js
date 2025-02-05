const mdWidth = 768;
const smWidth = 576;
const lgWidth = 992;


function resumeDownload (){
    const link = document.createElement('a');
    link.href = 'https://github.com/CalebErickson21/portfolio/raw/refs/heads/main/downloadables/Caleb%20Erickson%20Resume.docx';
    link.download = 'Caleb_Erickson_Resume.docx';
    link.click();
};


function sendEmail() {
  const subject = encodeURIComponent(document.getElementById('emailSubject').value);
  const body = encodeURIComponent(document.getElementById('emailBody').value);
  window.location.href = `mailto:crerickson@crimson.ua.edu?subject=${subject}&body=${body}`;
}


function toggleClassOnResize(element, toggleClass, size) {
  if (window.innerWidth < size) { element?.classList.remove(toggleClass); }
  else { element?.classList.add(toggleClass); }
}

// Navbar dynamic centering
const navCenter = document.querySelector("#navbar-center");
window.addEventListener("resize", () => toggleClassOnResize(navCenter, "navbar-center", lgWidth));
window.addEventListener("load", () => toggleClassOnResize(navCenter, "navbar-center", lgWidth));