
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



const url = "https://byui-cit230.github.io/weather/data/towndata.json"

// Fetch the town data
fetch(url)
.then(response => {return response.json();}) // Extract as JSON
.then(jsonObj => {

    console.log(jsonObj);
    const towns = jsonObj["towns"];  // Deconstruct Object
    console.log(towns[0]);

    const events = towns[0].events;
    console.log(events);

    for (let i = 0; i < events.length; i++) {
        let event = document.createElement("p");
        event.className = "paragraph-content"
        event.textContent = events[i];
        document.getElementById("town-events").appendChild(event);
    }


    // Loop through the array of towns. 
    /* for (let i = 0; i < 3; i++){

        // Create html card elements.
        let card = document.createElement('section');
        let textHalf = document.createElement('article');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        // Assign corresponding values
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p1.textContent = "Year Founded: " + towns[i].yearFounded;
        p2.textContent = "Population: " + towns[i].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        switch (i) {
            case 0:
                image.setAttribute('src', 'images/preston.jpeg') // SINCE API PHOTO IS BROKEN USE A PLACEHOLDER
                break;
            case 1:
                image.setAttribute('src', 'images/soda.jpeg') // SINCE API PHOTO IS BROKEN USE A PLACEHOLDER
                break;
            case 2:
                image.setAttribute('src', 'images/fish.jpeg') // SINCE API PHOTO IS BROKEN USE A PLACEHOLDER
                break;
            default:
                break;
        }

        // Add classes to sub divs to style alternating cards
        textHalf.classList.add("alternating");

        // Separate photos from text to do alternating cards
        textHalf.appendChild(h2);
        textHalf.appendChild(h3);
        textHalf.appendChild(p1);
        textHalf.appendChild(p2);
        textHalf.appendChild(p3);

        // Combine photos and text into one card
        card.appendChild(textHalf);
        card.appendChild(image)

        // Add card to document
        document.querySelector('div.cards').appendChild(card);

    } */
    

})


function displayCurrentYear() {
    var date = new Date() ;
    var year = date.getFullYear() ;

    document.getElementById("year").textContent = year

    document.getElementById("date").textContent = date.toDateString()
}