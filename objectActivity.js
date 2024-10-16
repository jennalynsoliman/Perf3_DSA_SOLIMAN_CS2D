//Activity 3: Working with objects

//Create an object called car
const car = {
    type: 'Sedan',
    model: 'Camry',
    color: 'Blue'
};

//Using typeof to check the type of the object and log it to the console
console.log(typeof car); 

//Update the type property to "Toyota" and log the updated object
car.type = 'Toyota';
console.log(car); 

//Adding a new property wheels with the value 4 
car.wheels = 4;
console.log(car); //log the updated object