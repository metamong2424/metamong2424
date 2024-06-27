var literal = "banana";
literal = "sue";
literal = "apple";
literal = "psj";
// literal = "PSJ"
// 위에 없는 PSJ는 오류가 나옴!!
console.log(literal);
// Q.왜 apple이 나오는지 알아내야함.
// 선언 1부분이 선언 >> 인가 2~3 부분이 인가 (=은 바로 인가를 해주는 역할)
// 즉, 리터럴에는 4가지가 올 수 있는데, = banana 는 인터럴의 값을 선언해주는것.
// "tom" | "apple" | "banana" | "sue" << 이런값들이 들어올수있다라고 선언하는것
// 원칙은 하나하나 다 써야하나, 선언을 A B C등으로 지정해서 재사용할 수 있는 편의기능이 있다.
