


//const { StatusCodes } = require('http-status-codes');

// Trong module này, sử dụng class thay vì arrow function

export default class User {
    constructor(user) {
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
    }
}
