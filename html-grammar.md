# html 기본문법

#### 각각의 명칭

```html
<p><span class="women">내용</span></p>
	<p><span> : 태그(요소) == Tag(Element)
	<span class="women"> : 속성(Arribute)
          class : 속성명(Property)
          women : 값(Value)
```



```html
<!doctype html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8"/>
    <title>첫번째 테스트 문서</title>
    <style>
	h1{background-color:#2233;}
	p{color:#77f;}
	.result{font-weight:bold;}
	p .add{font-weight:bold;}
		/* 공백한칸 들어가면 의미 달라짐 
	   	   'p태그 안에 있는 add라는 이름을 가진 친구를 굵게 해라'
		 */
    </style>
  </head>
  <body>
	<h1>문서 테스트</h1>
	<p>첫 번째 웹 문서를 제작해보도록 하겠습니다.</p>
	<p>두 번째 내용을 작성해보겠습니다.</p>
	<p class="result">결과는 잘 나올까요?</p>
	<p><span class="add">이것도 굵게</span></p>

	<script>
	   var myH = document.getElementsByTagName('h1')[0];
        	//h1태그를 가져오는 행동을 앞으로 myH라는 이름으로 선언하겠다
	   myH.addEventListener('click', function(){
           //클릭했을 경우 어떤 이벤트 발생하느냐
		myH.style.backgroundColor="#3fa";
           //배경색을 바꿔라
		
	   });
	</script>
  </body>
</html>
```

