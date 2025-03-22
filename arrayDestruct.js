const fun = () => {
    console.log('Happy Journey');
    return 20;
}
const [b, a] = [10, fun()];
console.log(b);