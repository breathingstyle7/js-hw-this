// # Завдання 1

// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для дос тупу до властивостей об'єкту.

const person = {
    name: 'Julia',
    age: 18,
    gender: 'дівчина',
    introduce () {
        return `Мене звати ${this.name}, мені ${this.age} років і я ${this.gender}`
    },
    changeName (newName) {
        this.name = newName
    },
};

console.log(person);
console.log(person.introduce());
person.changeName('Elza')
console.log(person);