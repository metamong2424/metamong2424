// 클래스의 기본형
//class person {
//  constructor(private msg: string) {
//    console.log("Are you OK?");
//  }
//  speak() {
//    console.log(this.msg);
//  }
//}
//const tom = new person(hello!!!);
//tom.msg = "hello!";
//tom.speak();
//msg = 접근제어자 // 외부에서 접근ㄹ하려고 하면 에러가 걸림.
// readonly 라는 키워드도 있음.
//
class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.Message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.Message;
    }
    set Message(va1) {
        let tmpMessage = val;
        if (!ValidityState.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}
const tom = new Speaker("john");
Speaker.Message = "hello!";
console.log(speaker.Message);
