class User {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age= age;

        console.log("User Is Created with Name = "+ this.name+ " Email = "+ this.email + ' and Age = '+ this.age )

    }
    register() {
        console.log(this.name, ' Is now registered')
    }
}
let usman = new User("Usman Bakhsh", "ehmusman@gmail.com", 25)
console.log(usman.name)
console.log(usman.email)
console.log(usman.age)
usman.register()