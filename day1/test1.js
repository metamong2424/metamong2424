// 클래스 정의
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name; // 생성자에서 전달받은 name을 속성으로 저장
    }
    // 메서드 정의
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
// 객체 생성
var tom = new Person("Tom");
// 메서드 호출
tom.greet(); // 출력: Hello, my name is Tom
