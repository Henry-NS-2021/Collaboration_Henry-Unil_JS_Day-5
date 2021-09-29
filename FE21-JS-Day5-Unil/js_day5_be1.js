/* Person Info Start */

var person = {
    fName: "John",
    lName: "Doe",
    age: 25,
    info: function() {
        return `My First Name is ${this.fName} and Last Name is ${this.lName} and ${this.age} years old.`;
    }
}

document.getElementById("personresult1").innerHTML = person.info();

var person = {
    fName: "Unil",
    lName: "Yang",
    age: 18,
    info: function() {
        return `My First Name is ${this.fName} and Last Name is ${this.lName} and ${this.age} years old.`;
    }
}

document.getElementById("personresult2").innerHTML = person.info();

var person = {
    fName: "Helena",
    lName: "Gassi",
    age: 28,
    info: function() {
        return `My First Name is ${this.fName} and Last Name is ${this.lName} and ${this.age} years old.`;
    }
}

document.getElementById("personresult3").innerHTML = person.info();

/* Person Info End */

/* Animal Info Start */
var animal = {
    animalType: "Dog",
    animalName: "Franz",
    animalAge: 3,
    info: function() {
        return `My Pet is ${this.animalType} and Name is ${this.animalName} and ${this.animalAge} years old.`;
    }
}
document.getElementById("animalresult1").innerHTML = animal.info();

var animal = {
    animalType: "Cat",
    animalName: "Sisi",
    animalAge: 5,
    info: function() {
        return `My Pet is ${this.animalType} and Name is ${this.animalName} and ${this.animalAge} years old.`;
    }
}
document.getElementById("animalresult2").innerHTML = animal.info();

var animal = {
    animalType: "Hamster",
    animalName: "Cosi",
    animalAge: 2,
    info: function() {
        return `My Pet is ${this.animalType} and Name is ${this.animalName} and ${this.animalAge} years old.`;
    }
}
document.getElementById("animalresult3").innerHTML = animal.info();

/* Animal Info End */

/* Car Info Start */

var car = {
    carBrand: "Volkswagen",
    carName: "Sharan",
    carYear: 3,
    info: function() {
        return `Car Brand is ${this.carBrand} and Model Name is ${this.carName} and ${this.carYear} years used.`;
    }
}
document.getElementById("carresult1").innerHTML = car.info();

var car = {
    carBrand: "BMW",
    carName: "X1",
    carYear: 4,
    info: function() {
        return `Car Brand is ${this.carBrand} and Model Name is ${this.carName} and ${this.carYear} years used.`;
    }
}
document.getElementById("carresult2").innerHTML = car.info();

var car = {
    carBrand: "Mercedes",
    carName: "E-Class",
    carYear: 1,
    info: function() {
        return `Car Brand is ${this.carBrand} and Model Name is ${this.carName} and ${this.carYear} years used.`;
    }
}
document.getElementById("carresult3").innerHTML = car.info();

/* Car Info End */

/* }

document.getElementById("result").innerHTML = person.info; */


/* class Car {
    bName;
    mName;
    color;

    constructor(a, b, c) {
        this.bName = a;
        this.mName = b;
        this.color = c;
    }
    printInfo = function() {
        return `Brand Name is ${this.bName} and Model Name is ${this.mName} and Color is ${color} <br>`;
    }

}

let car1 = new Car("Volkswagen", "Sharan", "Black");
var car2 = new NewClass("BMW", "X1", "Red");
var car3 = new NewClass("Mercedes", "E305", "Silver");

document.getElementById("result").innerHTML = car1.printInfo(); */