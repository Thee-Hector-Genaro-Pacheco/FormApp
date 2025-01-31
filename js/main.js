//main.js
import App from './App.js';
import Router from './utils/Router.js';

// Initialize Routes
App.initRoutes();
Router.init();

// Handle Form Submissions
document.addEventListener('submit', (e) => {
    if (e.target.id === 'create_user') App.handleCreateUser(e);
    if (e.target.id === 'login_user') App.handleLoginUser(e);
});
