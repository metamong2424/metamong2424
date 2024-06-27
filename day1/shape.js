var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var jill = {
    name: "jill",
};
// {A} A에 변수명을 넣어도 되고, 연산을 그대로 넣어도 된다!
//  const jill: { name: string } = {
//  name: "jill",
//  };
//  const jill: { person } = {
//  name: "jill",
//  };
var person = jill;
console.log(person);
