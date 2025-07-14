document.querySelectorAll('.course-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Enrollment request received! Team NAS will contact you.");
  });
});
