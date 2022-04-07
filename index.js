const people = {
    name: 'Артур',
    surname: 'Шаверков',
    birthday: '27.10.1994',
    causeOfJs: 'войти в ИТ',
    printName() {
        console.log('Имя:', this.name);
    },
    printSurname() {
        console.log('Фамилия:', this.surname);
    },
    printBirthday() {
        console.log('День Рождения', this.birthday);
    },
    printCause() {
        console.log(this.name, 'учит Js что бы', this.causeOfJs);
    },
    userDreem(dreem) {
        dreem = 'мечта';
        console.log(this.name, 'мечтает о ', dreem);
    },
    printAllInfo() {
        this.printName();
        this.printSurname();
        this.printBirthday();
        this.printCause();
        this.userDreem();
    }
};
people.printAllInfo();
