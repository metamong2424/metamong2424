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

class Runner {
  static lastRunTypeName: string;

  constructor(private typename: string) {}

  run() {
    Runner.lastRunTypeName = this.typename;
  }
}

const a = new Runner("a");
const b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName);
