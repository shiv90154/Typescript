function abcd(variable:number | string){
if (typeof variable === 'number'){
    variable.toFixed(2);
}
else if (typeof variable ==='string'){
    variable.toLowerCase
}
}
 abcd(12)

Inter section types 

let a: number | string;
a= 12;
a="shiv"



let a : number & string:

type Classmates = {
    section: string
}
type Student = {
    name: string
}
type ClassmateInStudents = Classmates & Student;
let a: ClassmateInStudents = {
    name: "shiv",
    section:'a'

}

type City ={

    name:string,
    population:number,
}
type Planet={
    name:string,
    cities :number
}

type citiesInplanet =City &Planet;
let value :citiesInplanet={
    name:"Bhalat",
    population:1299999,
    cities:12
}
console.log("hey")
console.log("hey")


type alias
primitive / object

type Polu={
name :string,
roll:number,
email:string
}