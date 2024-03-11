/*let message: string = "Hello, TypeScript!";
console.log(message);*/


let temperaturenumber: number = 5;
let msg: string ="welcomeMessage "; 
let check:boolean =true;

let colors : string [] =[ "blue", "orange"];
let userInfo : [string , number ]=["ghofrane" , 25];
//////////////

enum season {Spring,Summer,Autumn,Winter};
let s:season =season.Autumn;
let logValue:any=4;
function noReturn ():void {
    console.log("No return");
}
//////////////

function greet (a:string) : string{
return "a";
}

function multiply(a :number , b : number ): number{
    return a*b;
}

///////////////
function createEmail(subject:string, body :string="no sujet "  ):string{

 let s : string ="no sujet";
 if (subject) s=subject;return subject +""+s;
} 

function add(z: number, x:number, y?:number): number {
let sum=z+x;
if (y) sum+=z
return sum ;


}

/////////////

function getText(...string: string[]) {
    return string.reduce((accumulator, current) => accumulator + current, "");
}
/////interfaces
interface Vehicule {
    model: string;
    year: number;
    make?:number

}
function createVehicule(vehicule:Vehicule){
    console.log(vehicule.model , vehicule.year);
}
////////prop facultatives 

interface Person {
    email?: string;
}

function updatePerson(update : Person):{ email:string} {


let newPerson  = { email : "bek@gml.com" };
if( update.email){
    newPerson.email=update.email;
}
return newPerson;
} 
///////////prop lecture seul 
interface Circle{
    readonly centreX : number;
    readonly centerY : number;
    readonly raduis? : number;
}
 let C1 : Circle= { centerY: 10, centreX :20 };
 //////////classes

 class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    override move(distanceInMeters?: number): void {
        console.log("");
    }

}

 //////// acces Modifiers
 class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
}

/////////geniric 

function identity<T>(arg: T): T {
    return arg;
}


//////interface generic 
interface GenericIdentityFn<T> {
    (arg: T): T;
} 
///////enumeration 

enum Responce{
    yes = 1, no = 0,
}

/////enumeration de chaine
enum Message {
    Success = "SUCCESS",
    Failure = " FAILURE",
}

///////types avances| types d'union 
function padLeft (value : string , padding : number){

}
/////// Tupe d'intersection

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

///////// Module //// export import 
export default function   capitalize ( a:string): string{
    return a ;
}
//import{ capitalize} from ./'stringUtils' ;

//////export par defaut

// In file greeter.ts


// In another file
//import greet from './greeter';


/// espace de noms 
namespace Calculator  {
    export interface BasicCalculator {
        isValid(s: string): boolean;
    }
} 


///////decorateur 
function logged (constructor : Function, arg :any){
    return ; 
}
@logged
class Class {

}

////////decorateur de methode

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

/*class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @format (false)
    greet() {
        return "Hello, " + this.greeting;
    }
} */

//

//Types d’utilitaires 
interface Todo {
    title: string;
    description: string;
}

type PartialTodo = Partial<Todo>;

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};

interface User{
    name: string;
    age : number;
}
const user : Readonly <User> ={
    name :"ghof",
    age: 25, 
};

