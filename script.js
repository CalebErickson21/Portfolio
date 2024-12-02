document.getElementById('resumeDownload').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/CalebErickson21/portfolio/raw/refs/heads/main/downloadables/Caleb%20Erickson%20Resume.docx'; // Replace with your local server URL
    link.download = 'Caleb_Erickson_Resume.docx'; // Suggested filename for the user
    link.click();
  });