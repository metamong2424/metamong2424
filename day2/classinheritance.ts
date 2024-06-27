class Vehicle {
  constructor(private wheelCount: number) {}
  showNumberOFWheels() {
    console.log("moved ${this.wheelCount}");
  }
}
// 부모클래스의 클래스를 상속한다.
class Motorcycle extends Vehicle {
  constructor() {
    super(4);
  }
  // 위 함수 업데이트
  updateWheelCount(newWheelCount: number) {
    this.WheelCount = newWheelCount;
  }
}

// 오토 모바일을 객체화되어서 부모클래스에서 상속함.
class Automobile extends Vehicle {
  constructor() {
    super(2);
  }
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(50);
motorCycle.showNumberOFWheels();
const automobile = new Automobile();
automobile.showNumberOFWheels();
