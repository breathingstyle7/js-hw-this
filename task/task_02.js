// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
    carBrand: 'Audi',
    model: 'A6',
    year: 2016,
    maxSpeed: 256,
    averageSpeed: 87,
    initialSpeed: 0,
    showInfo () {
        return `Марка: ${this.carBrand}; Модель: ${this.model}; Рік випуску: ${this.year}`
    },
    showTime(location) {
        const time = location.distance / this.averageSpeed;
        console.log(`Автомобіль ${this.carBrand}, моделі ${this.model} дістанеться міста ${location.city} за ${Math.round(time)} години`);
    }
};

console.log(car.showInfo());

const location = {
    city: 'Kyiv',
    distance: 196,
};



car.showTime(location);