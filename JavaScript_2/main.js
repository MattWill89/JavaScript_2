//Exercise #1 //


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFood(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}:`);
            person[key].forEach(item => console.log(`- ${item}`));
        } else if (typeof person[key] === 'object') {
            console.log(`${key}:`);
            for (let shop in person[key][0]) {
                console.log(`- ${person[key][0][shop]} from ${shop}`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

displayFavoriteFood(person3);

//Exercise #2//


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => console.log(`Name: ${this.name}, Age: ${this.age}`);
    this.addAge = () => this.age++;
}


let person1 = new Person('John', 25);
let person2 = new Person('Alice', 30);

// Print both of their infos
person1.printInfo();
person2.printInfo();


person1.addAge();
person1.addAge();
person1.addAge();


person1.printInfo(); 
person2.printInfo();


// Exercise #3 //


function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

// Example usage:
checkStringLength("Hello, world!").then(result => {
    console.log(result); // Output: Big word
}).catch(error => {
    console.log(error); 
});

checkStringLength("Hi").then(result => {
    console.log(result); 
}).catch(error => {
    console.log(error); 
});
