// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

function student (name, age, rating) {
    this.name = name;
    this.age = age;
    this.rating = rating;
};

student.prototype.greetings = function () {
    return `Привіт, я ${this.name}`;
};

const students = [
    new student('Oleg', 20, 85),
    new student('Artem', 22, 90),
    new student('Kolya', 21, 88),
    new student('Misha', 23, 100),
    new student('Kiril', 20, 95)
];

const greet = students.map(student => {return `Привіт, я ${student.name}`});
console.log(greet);

const filteredByRating = students.filter(student => student.rating >= 90)
console.log(filteredByRating);

function addRating (num) {
    return this.rating += num
};

students.forEach(student => addRating.call(student, 20));
console.log(students);
