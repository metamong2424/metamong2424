// this 키워드 실습

class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const a = new B();
b.go = b.bind(a);
b.go();

console.log(b);
console.log(b.go);
