//Database.js

const Database = (() => {
    let data = JSON.parse(localStorage.getItem('personDB')) || [];

    const save = (person) => {
        data.push(person);
        localStorage.setItem('personDB', JSON.stringify(data));
    };

    const find = ( criteria = {}) => data.find((item) => Object.keys(criteria).every(key => item[key] === criteria[key]));
    const getAll = () => [...data]; // return a copy of the data
    return { save, find, getAll};

})();

export default Database;
