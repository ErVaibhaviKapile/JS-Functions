const person = {
    name: 'Vaibhs',
    age: 20,
    fun: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); 
person.fun(); 