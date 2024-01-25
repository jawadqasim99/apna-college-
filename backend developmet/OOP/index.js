// Factory function 

// function personMaker(name , age) {
//     const person={
//         name:name,
//         age:age,
//         talk(){
// console.log(`Hi , Welcome to ${this.name}`);

//         },
//     }
//     return person;
// }
// let p1=personMaker("jawad" , 21);

// console.log(p1);

// ... .........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// Constructor to creating a Object latest mathod best way to factory function 

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`hi my name is ${this.name}`);
// }
// let p1 = new Person("JAwad" , 21);
// console.log(p1);
// .........................................................................  

// Class is best way to create a object and lestest way to day all developer create object using constructor

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`my name is ${this.name}`);
//     }
// }

// let p1=new Person("Adam" , 12);
// console.log(p1); 

// .................................................... 

// Inheritence using a object 

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`hi, i am ${this.name}`);
    }
}


class student extends Person{
    constructor(name,age,markes){
        super(name,age)
        this.markes=markes;

    }
}
class teacher extends Person{
    constructor(name,age,subject){
        super(name,age)
        this.subject=subject;

    }
}

let stu=new student("adam" , 12 , 23);
console.log(stu.talk());