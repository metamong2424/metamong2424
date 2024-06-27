let val: unknown = 22;
val = "string value";
val = new Array();

console.log(val instanceof Array);

if (val instanceof Array) {
  val.push(33);
}

console.log(val);

// 트루가 출력이 안됐음. 내가 tsc 경로 잘못한거였음.
// val에 오류값뜨는건 val을 쓰는 다른 파일이 열려있어서 그런것임.
