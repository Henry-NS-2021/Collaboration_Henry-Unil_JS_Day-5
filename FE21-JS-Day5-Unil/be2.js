class Car {
    bName;
    mName;
    color;

    constructor(a, b, c) {
        this.bName = a;
        this.mName = b;
        this.color = c;
    }
    carInfo = function() {
        return `Brand Name is ${this.bName} and Model Name is ${this.mName} and Color is ${this.color} <br>`;
    }

}

class Person {
    fName;
    lName;
    age;

    constructor(a, b, c) {
        this.fName = a;
        this.lName = b;
        this.age = c;
    }
    personInfo = function() {
        return `My Name is ${this.fName} ${this.lName} and ${this.age} years old <br>`;
    }

}

class Animal {
    animalType;
    animalName;
    age;

    constructor(a, b, c) {
        this.animalType = a;
        this.animalName = b;
        this.age = c;
    }
    animalInfo = function() {
        return `My pet is ${this.animalType}. The name is ${this.animalName} and ${this.age} years old <br>`;
    }

}


let car1 = new Car("Volkswagen", "Sharan", "Black");
let car2 = new Car("BMW", "X1", "Red");
let car3 = new Car("Mercedes", "E305", "Silver");


let person1 = new Person("Unil", "Yang", "18");
let person2 = new Person("Theo", "Pitt", "21");
let person3 = new Person("Timo", "Ford", "23");

let animal1 = new Animal("Dog", "Jong", "3");
let animal2 = new Animal("Cat", "Sisi", "2");
let animal3 = new Animal("Hamster", "Gigi", "4");



document.getElementById("carresult").innerHTML += car1.carInfo();
document.getElementById("carresult").innerHTML += car2.carInfo();
document.getElementById("carresult").innerHTML += car3.carInfo();

document.getElementById("personresult").innerHTML += person1.personInfo();
document.getElementById("personresult").innerHTML += person2.personInfo();
document.getElementById("personresult").innerHTML += person3.personInfo();

document.getElementById("animalresult").innerHTML += animal1.animalInfo();
document.getElementById("animalresult").innerHTML += animal2.animalInfo();
document.getElementById("animalresult").innerHTML += animal3.animalInfo();