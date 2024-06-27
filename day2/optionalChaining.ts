// 선택적연결 교재 83쪽

namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;

  value = (조건) ? 

  //ㅗ삼항연산자 예시 알아달라고 하기.

  const val1 = undefined;
  const val2 = 10;
  const result = val1 ?? val2;

  // ??의 의미는????  
// 값이 1이
}
