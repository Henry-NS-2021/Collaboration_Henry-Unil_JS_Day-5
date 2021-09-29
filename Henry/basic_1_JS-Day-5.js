//BASIC 1
// first object
let printMsg = document.getElementById("msg");

let person = {
    firstN: "Alison",
    lastN: "Mane",
    age: 19,
    city: "Lost Village",

    description: function() {
        return `<div style="text-align: justify; padding: 10px 5px; border: darkblue dotted 2px; margin: 10px 0px;"><h3>Presentation</h3> <p>Hi! <br> My name is ${this.firstN} ${this.lastN}. I am ${this.age} years old. Currently, I live in a small town called ${this.city}.</p></div>`;
    }
}

// second objet
let car = {
    brand: "Toyota",
    model: "Sprinter Trueno",
    country: "Japan",
    year: 1986,
    carImg: `<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc8%2F38%2F6f%2Fc8386fd183262aa6aaaf1ad36110fbd6.jpg&f=1&nofb=1" style="width:
    40%; border: grey 5px solid;">`,
    description: function() {
        return `<div style="text-align: justify; padding: 0px 5px 5px; border: darkblue dotted 2px; margin: 10px 0px;"><h3>${this.brand} ${this.model} ${this.year}</h3> Everyone knows ${this.brand}. Its ${this.year} model, ${this.model} from ${this.year} is very famous and  still trully beloved today in its country of ${this.country}. <br> If you do no know how this ${this.brand} ${this.model} looks like, here is some visual for you: <br> <br> ${this.carImg}.</div>`;
    }
}

let animal = {
    animalName: "Bear",
    location: "Russia",
    weight: "248",
    img: `<img style="width:40%; border: black 5px solid;" src="https://www.expresstorussia.com/files/pages/015159.jpg" >`,

    description: function() {
        return `<div style="text-align: justify; padding: 0px 5px 5px; border: darkblue dotted 2px; margin: 10px 0px;"> This is a ${this.animalName} from ${this.location}, that weighs ${this.weight}kg.<br><br>${this.img}</div>`;
    }
}

// printMsg.innerHTML = person.description();
// printMsg.innerHTML += car.description();
// printMsg.innerHTML += animal.description();


let array = [person.description(), car.description(), animal.description()];

printMsg.innerHTML = array.join("")