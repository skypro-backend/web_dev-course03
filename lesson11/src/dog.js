/**
 * Собака
 * имя (строка)
 * цвет (строка)
 * порода (строка)
 * возраст (число)
 */

function Dog(name, color, breed, age) {
    return {
        name,
        color,
        breed,
        age,
        bark: function () {
            console.log('bow-wow');
        }
    };
}

const duffy = Dog('Даффи', 'черный', 'лабрадор', 8);

// class Dog {
    // constructor(name, color, breed, age) {
        // this.name = name;
        // this.color = color;
        // this.breed = breed;
        // this.age = age;
    // }

    // bark() {
        // console.log('bow-wow');
    // }
// }

// const duffy = new Dog('Даффи', 'черный', 'лабрадор', 8);