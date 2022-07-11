/*
    - 논리연산자 활용
    조건이 true && 코드실행
    조건이 false || 코드실행 (|| 앞에 조건 true면 뒤에 코드실행X)
*/

const obj1 = {name: 'do'};
const obj2 = {name: 'yi', membership: 'yes'};

// 회원권이 있으면 신규로 바꿔주고, 없으면 만들어주는 함수생성
function chageMembership(member){
    if(member.membership){
        throw new Error('회원권 없음');
    }
    member.membership = '새로운 회원권 줄게!';
}
function makeMembership(member){
    if(!member.membership){
        throw new Error('회원권 있음');
    }
    member.membership = '회원권 만들어줄게!';
}

obj1.membership && chageMembership(obj1);
obj2.membership && chageMembership(obj2);
console.log(obj1);
console.log(obj2);

obj1.membership || makeMembership(obj1);
obj2.membership || makeMembership(obj2);
console.log(obj1);
console.log(obj2);

/* 
    - 인자를 전달받지 못한 경우, 기본값 설정
    - default parmeter은 undefined일 경우만 적용됨
*/
function print(message /*= '기본값' 이게 default parmeter */){
    const text = message || '기본값';
    console.log(text);
}
// 인자값을 전달하지 않아서, || 뒤에 코드 실행됨
print();