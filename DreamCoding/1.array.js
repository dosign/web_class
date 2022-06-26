/*
    일반적인 배열은 동일한 메모리 크기를 가지고, 연속적으로 이어져 있어야 함
    하지만 자바스크립트 배열은 연속적으로 이어져 있지 X
    자바스크립트 배열은 일반적인 배열을 흉내낸 형식
    오브젝트(객체)와 매우 유사함
*/ 

const arrayExam = new Array(); // 비어있는 배열 생성
arrayExam = new Array(1,2,3); // [1,2,3]
arrayExam = Array.of(1,2); // [1,2]

const arrayOther = new Array(1,2,3,4); // [1,2,3,4]
arrayExam = Array.from(arrayOther); // [1,2,3,4]

// 오브젝트와 동일한 형식으로 배열 생성 가능
arrayExam.from({
    0: '안',
    1: '녕',
    length: 2,
}); 