function myfunction() {
    console.log(this);
}
myfunction();
var tetst = new myfunction();
