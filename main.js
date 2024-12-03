// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Typewriter Effect
  const text = "Welcome to my Portfolio";
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;
  
  // Modal Popup
  document.getElementById('openModal').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'block';
  });
  
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
    }
  });
  
  // Image Gallery Lightbox
  document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
      document.getElementById('lightbox').style.display = 'block';
      document.getElementById('lightboxImg').src = image.src;
    });
  });
  
  document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });
  