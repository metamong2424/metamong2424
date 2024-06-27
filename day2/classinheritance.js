var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOFWheels = function () {
        console.log("moved ${this.wheelCount}");
    };
    return Vehicle;
}());
// 부모클래스의 클래스를 상속한다.
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super.call(this, 4) || this;
    }
    return Motorcycle;
}(Vehicle));
// 오토 모바일을 객체화되어서 부모클래스에서 상속함.
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 2) || this;
    }
    // 위 함수 업데이트
    Automobile.prototype.updateWheelCount = function (newWheelCount) {
        this.WheelCount = newWheelCount;
    };
    return Automobile;
}(Vehicle));
var motorCycle = new Motorcycle();
motorCycle.showNumberOFWheels();
var automobile = new Automobile();
automobile.showNumberOFWheels();
