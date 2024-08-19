document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// For Products

$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });


  let black = document.getElementById("black")
  let red = document.getElementById("red")
  let orange = document.getElementById("orange")


    black.addEventListener("click", ()=>{
        black.classList.add("active")
        red.classList.remove("active");
        orange.classList.remove("active")

});

    red.addEventListener("click", ()=>{
        red.classList.add("active")
        black.classList.remove("active");
        orange.classList.remove("active")

});

    orange.addEventListener("click", ()=>{
        orange.classList.add("active")
        red.classList.remove("active");
        black.classList.remove("active");


});

//  Modal Show

let card = document.getElementById("card");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

card.addEventListener("click", () => {
    modalImg.src = card.querySelector("img").src; // Set the modal image to the card's image
    modal.classList.add("show"); // Show the modal
});
