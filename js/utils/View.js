//View.js
const View = (() => {
    const render = (content) => {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = content;
    };

    const showCreateUserForm = () => `
        <form id="create_user" class="form-container">
            <h2 class="form-title">Create User</h2>
            <label>Name: <input type="text" id="name" class="input-field" required></label><br>
            <label>Age: <input type="number" id="age" class="input-field" required></label><br>
            <label>Email: <input type="email" id="email" class="input-field" required></label><br>
            <label>Password: <input type="password" id="password" class="input-field" required></label><br>
            <label>Gender:
                <input type="radio" name="gender" value="male" class="input-radio"> Male
                <input type="radio" name="gender" value="female" class="input-radio"> Female
            </label><br>
            <label>City: <input type="text" id="city" class="input-field" required></label><br>
            <button type="submit" class="btn">Submit</button>
        </form>
    `;

    const showLoginForm = () => `
        <form id="login_user" class="form-container">
            <h2 class="form-title">Login</h2>
            <label>Email: <input type="email" id="login-email" class="input-field" required></label><br>
            <label>Password: <input type="password" id="login-password" class="input-field" required></label><br>
            <button type="submit" class="btn">Login</button>
        </form>
    `;
    
    return { render, showCreateUserForm, showLoginForm };
})();

export default View;