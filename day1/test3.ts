class Student {
  major: string;
  studentCode: number;
  grade: string;
  constructor(Major, StudentCode, Grade) {
    this.major = Major;
    this.studentCode = StudentCode;
    this.grade = Grade;
  }

  print() {
    console.log("${this.studentCode}학번");
    console.log("나의 전공은 ${this.major}입니다.");
    console.log("성적은 ${this.grade}입니다.");
  }
}

const hyung = new Student("체육학", 2005, "C");
hyung.print();
console.log(hyung);
