let studentID:number = 15;
let studentName:string = 'Doyi';
let age:number = 15;
let courseCompleted:boolean = false;

let student1 = {
  studentID : 123,
  studentName : 'Doyi',
  age : 15,
  courseCompleted : false,
}

/*
  인터페이스를 사용하는 이유는
  -앞에 정의한 타입을 가진 변수들을 리턴할 때
  -하나씩 재정의 해주지 않고 한꺼번에 묶어서 리턴해주기 위해
  -타입스크립트에게 내가 쓸 변수들의 타입을 알려주기 위해
  -js파일로 컴파일 되지 않음
  -오로지 타입스크립트에게 정보제공용으로 사용한 것임
  -인터페이스명을 대문자로 시작

  -인터페이스에 묶어준 프로퍼티들 중 하나라도 빼놓고 리턴할 경우
  -에러메세지가 뜨는데
  -선택적 프로퍼티로 지정하는 방법은
  -변수 뒤에 '?' 붙이기
*/

interface Student {
  readonly studentID:number;
  studentName:string;
  age?:number;
  courseCompleted:boolean;
  //addComment (comment : string): string;
  addComment?: (Comment : string) => string;
}


function getStudentDetails(studentID:number): Student
{
    return {
      studentID : 123,
      studentName : 'doyi',
      courseCompleted : false,
    };
}

function saveStudentDetails(student:Student):void {
  
}
saveStudentDetails(student1);
