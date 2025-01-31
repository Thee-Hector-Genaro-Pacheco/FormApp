//Person.js
export default class Person {
    constructor(name, age, email, password, gender, city, avatar = null, hobbies = [], created = new Date()) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.city = city;
        this.avatar = avatar;
        this.hobbies = hobbies;
        this.created = created;
    }
}