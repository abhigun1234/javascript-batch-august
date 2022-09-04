// // declare a array
// var arr=[1,2,3,4,5,6,7]
// console.log("arr",arr[0])
// console.log("arr",arr[1])
// console.log("arr",arr[2])
// console.log("arr",arr[3])
// console.log("arr",arr[4])
// console.log("arr",arr[5])
// // {} object
// let students=[{id:1,"name":"sanjish"},{id:2,"name":"nilima"}]
// console.log("students",students[0])
// console.log("students",students[1])
// for(var student of students){
//     console.log("student name",student.name)
//     console.log("student id",student.id)
// }
// var students=[{"id":1,"first_name":"Kelcie","last_name":"Brayn","email":"kbrayn0@yahoo.com","gender":"Female"},
// {"id":2,"first_name":"Alix","last_name":"Brookesbie","email":"abrookesbie1@devhub.com","gender":"Male"},
// {"id":3,"first_name":"Bendite","last_name":"McGragh","email":"bmcgragh2@xinhuanet.com","gender":"Female"},
// {"id":4,"first_name":"Miller","last_name":"McCrone","email":"mmccrone3@myspace.com","gender":"Male"},
// {"id":5,"first_name":"Johnny","last_name":"Costi","email":"jcosti4@about.me","gender":"Male"},
// {"id":6,"first_name":"Aliza","last_name":"Dilland","email":"adilland5@bandcamp.com","gender":"Polygender"},
// {"id":7,"first_name":"Christie","last_name":"Farthing","email":"cfarthing6@abc.net.au","gender":"Male"},
// {"id":8,"first_name":"Eden","last_name":"Atheis","email":"eatheis7@icq.com","gender":"Polygender"},
// {"id":9,"first_name":"Efren","last_name":"Gandar","email":"egandar8@marriott.com","gender":"Male"},
// {"id":10,"first_name":"Dodi","last_name":"Bartels","email":"dbartels9@de.vu","gender":"Female"}]

// 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")// push adding eliment end 
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.pop()
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
fruits.splice( 0,3); 
console.log("fruits",fruits)
// delete fruits; 
// console.log("fruits",fruits)

// function hello(str){

//   console.log("hello",str)
//   return 'hello abhishek'
// }

// var result=hello('abhishek')
// console.log("RESULT",result)
// es6
// var hello=function(){

//  console.log("hello")   
// }
// hello()

// es6

// const hello=(str)=>{
//     console.log("hello")   
//  return 'hhhh'
// }

// var gg=hello('bye')

// class Person{

//     constructor(_id,_name){
//    console.log("hello constructor parent")
//    this.id=_id;
//    this.name=_name
//     }
//     getPersonData(){

//         console.log("id",this.id)
//         console.log("name",this.name)
//     }
// }


// let p1=new Person(1,'abrar')
// p1.getPersonData()
// let p2=new Person(2,'abhishek')
// p1.getPersonData()

// class Employee extends Person{

//     constructor(){
//         console.log("constructor of child")
//         super()
//     }
// }
// let e1=new Employee()

