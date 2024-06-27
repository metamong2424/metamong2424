// // 메서드 = 동작
// class ClassA {
//   static typeName: string;
//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// //console.log(a.typeName);
// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());
// // 이건 이해해야함
var Runner = /** @class */ (function () {
    function Runner(typename) {
        this.typename = typename;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typename;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName);
