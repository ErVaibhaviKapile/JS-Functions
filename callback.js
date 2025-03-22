//Callback function
function fun(name, callback) {
    console.log("Enjoy, " + name + "!");
    callback();
}

function journey() {
    console.log("Happy Journey!");
}

// Using the callback
fun("Vaibhavi", journey);