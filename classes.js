var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Is Created with Name = " + this.name + " Email = " + this.email + ' and Age = ' + this.age);
    }
    User.prototype.register = function () {
        console.log(this.name, ' Is now registered');
    };
    return User;
}());
var usman = new User("Usman Bakhsh", "ehmusman@gmail.com", 25);
console.log(usman.name);
console.log(usman.email);
console.log(usman.age);
usman.register();
