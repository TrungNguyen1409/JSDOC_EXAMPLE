//@ts-check

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";


/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98,97.7,76,89];


/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello'
    
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */

const calculateTax = (amount, tax) =>{
    return `$${amount + tax * amount}`;
};

console.log(calculateTax(100,0.1));


/**
 * A student 
 * @typedef {Object} Student
 * @property {number} id - Student ID 
 * @property {string} name - Student name 
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active 
 * 
 */


/**
 * @type {Student}
 * 
 */
const student = {
    id: 1,
    name: "Trung",
    age: 22,
    isActive: true
};

/**
 * Class to create a person object
 */
class Person {
    /**
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo){
        /**
         * @property {string} name Person age
         */
        this.name = personInfo.name;
        /**
         * @property {number} age Person age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet A greeting with the name and age
     * @returns void
     */
    greet(){
        console.log(`Hello, my name is ${this.name} and I am  ${this.age}`);
    }
}


/**
 * Person one
 *
 * See {@Link Person}
 */
const person1 = new Person({
    name: 'John Doe',
    age: 30
});

console.log(person1.greet());