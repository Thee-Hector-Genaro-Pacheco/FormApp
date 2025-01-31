FormApp

📌 Project Overview

FormApp is a simple web application that allows users to create an account and log in. It features a modular JavaScript architecture using both Object-Oriented Programming (OOP) and Functional Programming (FP) principles, while following SOLID design principles for maintainability and scalability.

🚀 Features

User registration and authentication

Client-side routing using JavaScript (SPA approach)

Local storage for user data management

Responsive CSS styling with Flexbox and Grid

Implements SOLID OOP principles for better code structure

Uses Functional Programming (FP) concepts for better modularity

Applies Class Design Pattern from CPSC 121A & 121L @ CSUF

🛠️ Technologies Used

HTML: Structure of the application

CSS: Styling and responsive design

JavaScript (ES6+): Core logic & interactivity

Express.js: Local development server

LocalStorage: Temporary data storage

📂 Folder Structure

FormApp/
│── index.html       # Main HTML file
│── css/
│   └── styles.css   # CSS styles
│── js/
│   ├── models/
│   │   └── Person.js       # Defines User model
│   ├── utils/
│   │   ├── Database.js     # Manages user data
│   │   ├── Router.js       # Handles navigation
│   │   ├── View.js         # Manages UI rendering
│   ├── App.js         # Main application logic
│   ├── main.js        # Entry point
│── server.js         # Express server
│── README.md         # Project documentation

📖 Learning from Mastering JavaScript OOP & CPSC 121A & 121L @ CSUF

While working on this project, I learned about SOLID principles from the book "Mastering JavaScript Object-Oriented Programming" and applied the Class Design Pattern concepts taught in CPSC 121A & 121L @ CSUF.

🔹 Class Design Pattern in Router.js

Thinking of a Router in terms of state and behavior:

State:

routes → Stores defined application routes.

currentPath → Tracks the current path being rendered.

Behavior:

addRoute(path, action) → Allows new routes to be added dynamically.

navigateTo(url) → Updates the URL and renders the correct view.

handleLocation() → Checks the current path and executes the corresponding action.

init() → Initializes event listeners for navigation and updates state when history changes.

By structuring Router.js as a class-based module, I ensured scalability, maintainability, and proper state management for client-side routing.

📖 Applying SOLID Principles

🔹 S - Single Responsibility Principle (SRP) ✅

Each module (Person, Router, Database, View, etc.) has only one responsibility.

Database.js only manages data storage while View.js handles UI rendering.

🔹 O - Open/Closed Principle (OCP) ⚠️ (Partially Implemented)

Router.js allows new routes to be added without modifying existing logic.

Database.js could be refactored to support multiple storage options.

🔹 L - Liskov Substitution Principle (LSP) ❌ (Not Implemented)

No inheritance hierarchy yet; we could introduce User and Admin classes.

🔹 I - Interface Segregation Principle (ISP) ❌ (Not Implemented)

Database.js could be modularized to avoid unused methods when switching storage systems.

🔹 D - Dependency Inversion Principle (DIP) ⚠️ (Partially Implemented)

App.js relies on abstract modules (Router, Database, etc.).

Storage logic could be refactored to depend on interfaces rather than directly on localStorage.

📖 Functional Programming (FP) Concepts Applied

In addition to OOP principles, FormApp also implements Functional Programming concepts for better modularity and code clarity:

🔹 First-Class Functions & Higher-Order Functions ✅

Functions like render(), handleCreateUser(), and handleLoginUser() are treated as first-class citizens, allowing us to pass them around.

🔹 Pure Functions ✅

Functions such as View.render() and Database.find() are pure functions, meaning they return the same output given the same input and have no side effects.

🔹 Immutability & Data Transformation ✅

Database.js follows immutability principles, where data is copied instead of mutated directly.

.ever(), and [...] (spread operator) are used to handle data transformations in a declarative way.

🔹 Declarative Programming ✅

Router.js follows a declarative style, where routes are added dynamically instead of being hardcoded.

📜 How to Run the Project

1️⃣ Clone the Repository

git clone https://github.com/yourusername/FormApp.git
cd FormApp

2️⃣ Install Dependencies

npm install

3️⃣ Start the Local Server

npm start

4️⃣ Open the App in Browser

http://localhost:5500/

🔧 Future Improvements

Implement Admin & User roles using Liskov Substitution Principle.

Allow database abstraction to support APIs and IndexedDB.

Improve authentication with password encryption.

Enhance Functional Programming concepts by removing any remaining side effects.

📜 License

This project is open-source under the ISC License.
