//App.s

import Person from "./models/Person.js";
import Database from "./utils/Database.js";
import Router from "./utils/Router.js";
import View from "./utils/View.js";

const App = (() => {
    const handleCreateUser = (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            email: document.getElementById('email').value, 
            password: document.getElementById('password').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            city: document.getElementById('city').value
        };

        if (Object.values(formData).some((field) => !field)) {
            alert('Please fill in all the fields');
            return;
        }

        const {name, age, email, password, gender, city} = formData;
        const newUser = new Person(name, age, email, password, gender, city);

        Database.save(newUser);
        alert(`User created successfully`);
        Router.navigateTo(`/login`);
    };

    const handleLoginUser = (e) => {
        e.preventDefault();
        const email = document.getElementById(`login-email`).value;
        const password = document.getElementById(`login-password`).value;

        const user = Database.find({email, password});
        if (user) {
            alert(`Welcome, ${user.name}!`);
            Router.navigateTo(`/`);
        } else {
            alert(`Invalid credentials`);
        }
    };

    const initRoutes = () => {
        Router.addRoute('/', () => View.render(View.showCreateUserForm()));
        Router.addRoute('/login', () => View.render(View.showLoginForm()));
        Router.init();
    };

    return {initRoutes, handleCreateUser, handleLoginUser};
})();

export default App;
