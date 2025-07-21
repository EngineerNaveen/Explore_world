function togglecard(card){
    card.classList.togle("active");
}

function scrollToDest(){
    document.getElementById("destination").scrollIntoView({behavior: "smooth"})
}

function toggleMenu(){
    const navLinks = document.querySelector(".navbar ul");
    navLinks.classList.toggle("show");
}

function submitFeedback(event) {
  event.preventDefault();
  document.getElementById("form-status").textContent = "Thank you! Your message has been sent.";
  setTimeout(() => {
    document.querySelector(".feedback-form").reset();
    document.getElementById("form-status").textContent = "";
  }, 3000);
  return false;
}
