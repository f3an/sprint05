module.exports = class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get age() {
        return this.age1;
    }
    set age(value) {
        if (value <= 1 || value > 100) {
            console.error("ERROR1: 1 <= age < 100");
            return;
        } else {
            return this.age1 = value;
        }
    }
    get salary() {
        return this.salary1;
    }
    set salary(value) {
        if (value <= 1 || value > 10000) {
            console.error("ERROR2: 1 <= salary < 10000");
            return;
        } else {
            return this.salary1 = value;
        }
    }
    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}