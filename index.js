 // JavaScript function to get the current year and insert it into the HTML
 function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}
function myFunction() {
    var myLinks = document.getElementById("myLinks");
    var homeLink = document.querySelector('.topnav .home');
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        homeLink.style.display = "block";
    } else {
        myLinks.style.display = "block";
        homeLink.style.display = "none";
   }
 }

 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("myBtn").style.display = "block";
   } else {
     document.getElementById("myBtn").style.display = "none";
   }
}
 
 // Functionality for back to top button
function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projects-container');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  nextBtn.addEventListener('click', () => {
      container.scrollBy({
          left: container.clientWidth, // Scroll by the width of the container
          behavior: 'smooth'
      });
  });

  prevBtn.addEventListener('click', () => {
      container.scrollBy({
          left: -container.clientWidth, // Scroll back by the width of the container
          behavior: 'smooth'
      });
  });
});