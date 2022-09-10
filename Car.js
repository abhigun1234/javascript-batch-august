// var carData={name:"maruti",price:300000}
// console.log("name",carData.name)
// // es6 
// // class
class Car{
// intilize the data member of the class

    constructor(name,price,speed){
        console.log("name",name)
        console.log("price",price)
        console.log("speed",speed)
    }

    // 
    start(name){
        console.log("starting my car",name)
    }
}
let car1=new Car("nexon","1234455","12");
let car2=new Car("creta","333","122");
car1.start("nexon")
car2.start("creata")