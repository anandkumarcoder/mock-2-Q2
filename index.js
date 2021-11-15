const nameHeading = document.querySelector(".name");
const smallBorder = document.querySelector(".smallBorder");
const bigBorder = document.querySelector(".bigBorder");

smallBorder.addEventListener('click' , () =>{
    nameHeading.style.borderWidth = "5px "
} )

bigBorder.addEventListener('click' , () =>{
    nameHeading.style.borderWidth = "10px "
} )