// 클래스의 기본형
class person {
  constructor(private msg: string) {
    console.log("Are you OK?");
  }
  speak() {
    console.log(this.msg);
  }
}

const tom = new person(hello!!!);
tom.msg = "hello!";
tom.speak();

//msg = 접근제어자 // 외부에서 접근하려고 하면 에러가 걸림.
//readonly 라는 키워드도 있음.
