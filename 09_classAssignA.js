
console.log("========== Vehicle Details ==========");

class Vehicle {
constructor(name, year, price, engine, brake){
this.name = name ;
this.year = year ;
this.price = price ;
this.engine = engine ;
this.brake = brake ;
    }

    details(){
        console.log(`Details : ${this.name}, ${this.year}, ${this.price}, ${this.engine}, ${this.brake}`);
    }  
}
const shine = new Vehicle("Shine", "2000", "95,000", "250CC", "Disc");
shine.details();

const deluxe = new Vehicle("HF Deluxe", "2005", "80,000", "97CC", "Disc");
deluxe.details();

const hero = new Vehicle("Splendor", "2022", "75,000", "95CC", "Drum");
hero.details();

const bajaj = new Vehicle("Pulser", "2024", "99,000", "126CC", "Disc");
bajaj.details();

const tvs = new Vehicle("Raider", "2024", "1,00,000", "125CC", "Drum");
tvs.details();

console.log("========== College Details ==========");

class College {
    constructor(name, location, year, course){
        this.name = name;
        this.location = location;
        this.year = year;
        this.course = course;
    }

    details(){
        console.log(`Details : ${this.name}, ${this.location}, ${this.year}, ${this.course}`);
    }  
}
const iit = new College("Indian Institute of Technology (IIT) Bombay", "Maharashtra", "1985", "Computer Science");
iit.details();

const iiSc = new College("Indian Institute of Science (IISc) Bangalore", "Bangalore (Karnataka)", "1998", "Electronics & Telecommunications(E&TC)");
iiSc.details();

const nit = new College("National Institute of Technology (NIT)", "Tamilnadu", "1990", "Aerospace Eng");
nit.details();

const stephen = new College("Stephen  College ", "Delhi", "1980", "Economics");
stephen.details();