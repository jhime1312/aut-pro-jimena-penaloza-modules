import { sayHello } from "./sayHello.js";
import { userAge } from "./userAge.js";

export function userData(firstName, lastName, birthYear){
    sayHello(firstName, lastName);
    userAge(birthYear); 

    return sayHello, userAge;
}






