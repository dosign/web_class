/**
 * 
 * @returns 1씩 증가해 콘솔에 찍히는 기능을 하는 배열
 */
function loop(){
	const array = [];
	for(let i = 0; i < 5; i++){
		array.push(function () {
			console.log(i);
		});
	}
	return array;
}

const array = loop();
array.forEach((func) => func());

// 만약 let이 아니라 var을 썼다면
// 함수블럭 스코프만 있고 코드블럭 스코프가 없기 때문에
// 1씩 증가해서 새로운 변수가 차곡차곡 쌓이는게 아니라 하나의 변수에 업데이트 되는 형식
// 0~4가 나오지 않고, 5가 출력됨