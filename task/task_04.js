// # Завдання 4

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "balanceInfo", який виводить поточний баланс
// користувача в консоль.

// Створіть масив "users", який містить кілька об'єктів типу "user". Використовуючи
// метод "forEach()", викличте метод "addMoney" на кожному елементі масиву "users".
// Використовуючи метод "filter()", створіть новий масив, який міститиме тільки ті
// об'єкти типу "user", у яких баланс більший за вказану суму. Використовуючи метод
// "map()", створіть новий масив, який містить баланс кожного користувача з масиву
// "users". Виведіть цей масив в консоль.

// Використайте метод "call()", щоб викликати метод "balanceInfo" на конкретному
// об'єкті "user". Перевірте, що в контексті методу "balanceInfo" значення "this"
// вказує на конкретний об'єкт "user".

const user = {
    name: 'Julia',
    balance: 10000,
    addMoneyToWallet (number) {
        this.balance += number;
    },
    balanceInfo () {
        return `Поточний баланс: ${this.balance}`
    },
};

const users = [
    {name: 'joe', balance: 2000},
    {name: 'bob', balance: 1000},
    {name: 'jack', balance: 500},
    {name: 'salivan', balance: 3000},
];

users.forEach(user => {
    user.addMoneyToWallet = function(amount) {
        this.balance += amount;
    };
    user.addMoneyToWallet(250);
});

// users.forEach(user => {let filteredByBalance = [user].filter(user => user.balance >= 1500)
//     console.log(filteredByBalance);
// });

const filteredUsers = users.filter(user => user.balance >= 1500);

const balances = users.map(user => user.balance);

console.log(filteredUsers);
console.log(balances);

const userInfo = user.balanceInfo.call(user);

console.log(userInfo);