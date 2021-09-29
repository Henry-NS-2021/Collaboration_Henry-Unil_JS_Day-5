let printMe = document.getElementById("msg");

// define first class 
class Car {
    brand;
    model;
    color;
    year;
    img;
    // define construction
    constructor(a, b, c, d, e) {
            this.brand = a;
            this.model = b;
            this.color = c;
            this.year = d;
            this.img = e;
        }
        //define method
    classFunction() {
        return `<div style="float: right; width: 40vw; padding: 0px 2%; font-size: 1.9vw;"><h1>${this.brand} ${this.model}</h1>
        <p>Year: ${this.year} <br> Color: ${this.color} </p></div>
        <img style="width: 50%; border: grey ridge 5px;" src="${this.img}">`;
    }
}
//3 bjects of the class Car
var Nissan = new Car("Nissan", "GT-R", "Orange", 2003, "https://ig-model.com/lineup/1532/img/photo2L.jpg");

var Pagani = new Car("Pagani Zonda", "R", "Black", 2010, "https://autodius.com/wp-content/uploads/2018/03/2010-pagani-zonda-r.jpg");

var Citroen = new Car("Citroen", "Granturismo", "White", "2009", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F3639%2F3349809526_8100f53095_b.jpg&f=1&nofb=1")

//Display objects on browser
printMe.innerHTML = Nissan.classFunction();
printMe.innerHTML += Pagani.classFunction();
printMe.innerHTML += Citroen.classFunction();