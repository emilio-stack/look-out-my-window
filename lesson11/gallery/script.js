const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };
  
  let imagesToLoad = document.querySelectorAll('img[data-src]');
  imagesToLoad.forEach((img) => {
      loadImages(img);
    });



document.getElementById("menu").addEventListener("click", dropDown) 

function dropDown() {
    var dropDownMenu = document.getElementById("drop-down-nav");
    var className = dropDownMenu.classList;
    dropDownMenu.classList.toggle("show");

}

function displayBanner() {
    var date = new Date;
    // Change the expression to the current day to test. 5 == friday.
    if (date.getDay() == 5){
        var banner = document.getElementById("pancake-banner");
        banner.style.display = "block";
    }
}

window.addEventListener("load", displayBanner);


function displayCurrentYear() {
    var date = new Date() ;
    var year = date.getFullYear() ;

    document.getElementById("year").textContent = year

    document.getElementById("date").textContent = date.toDateString()
}