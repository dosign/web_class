# HTML&CSS

### HTML

- 문단 태그

  `<p>` : 띄어쓰기, 줄바꿈 여러개 할 수 없어 `<br />`로 줄바꿈 (권장x)

  `<pre> ` : 띄어쓰기, 줄바꿈 가능. 불편함이 많아 코드용으로만 사용

  - entity code

    **코드로 인식되지 않고 화면상에 그대로 글자로 보이고 싶을 때**

    `&amp;` : & 표시

    `&lt;` : <  

    `&gt;` : >

    `&sol;` : /

    `&#8361;` : ₩

    

  `<blockquote>` : 인용문 담는 용도

  ​	`<blockquote><q>여기 내용자리</q></blockquote>`

  `<abbr title="약어풀어서">` : 약어 설명 태그 마우스오버시 설명표시됨

  

- 강조 태그

  `<strong>` : 굵은 글씨

  `<em>` : 기울임

  `<del>` : 취소선 표시

  `<ins>` : 밑줄 표시

  

- 리스트

  `<ol><li>목록</li></ol>` : 순서있는 리스트 

  `<ul><li>목록</li></ul>` : 순서없는 리스트

  `<dl><dt>제목</dt><dd>내용</dd></dl>` : 제목과 내용이 함께 있는

  

- 이미지 및 링크 태그

  `<img src="이미지경로" alt="의미있는 이미지 설명" />`

  `<a href="주소" target="_blank or _self">어디로 이동</a>`

  

- 의미없는 틀 잡아주는 박스 태그

  `<div>` : 의미없는, 단순히 영역 잡아주는 박스

  `<span>` : 의미없는, 단순한 내용의 그룹. 작은 박스
  
  
  
- 시멘틱 구조 : **각 영역별로 의미를 가지고 쓰이도록 처리된 영역** / 반드시 h1~6제목 따라 들어가야함

  ```html
  <!doctype html>
  <html>
      <head></head>
      <body>
          <header>
          	<p>
                  header는 웹페이지 상단에 존재, 로고/h1을 담으며 전체 웹페이지 구조를 
                  파악할 수 있는 nav영역을 포함시키는 기능 가짐
              </p>
          </header>
          <nav>
          	<p>
                  nav는 웹페이지 내부에서 클릭하면 해당하는 페이지로 이동하게 만들어주는
                  링크들의 집합 navigation요소를 담아놓은 영역
              </p>
          </nav>
          <main>
          	<p>
                  main은 section,article의 영역을 정리해서 더 큰 영역으로 담는 곳
                  아직 대부분의 사이트에서 완벽하게 지원하지 못하고 있음
              </p>
          
              <section>
                  <p>
                      section은 하나의 대표 내용을 보여주는 영역, 다른 내용과 연계되어있는
                      ex)광고 banner
                  </p>
              </section>
              <article>
                  <p>
                      article은 section과 유사한 기능, 대신 본문내용,다른내용과 연계되지
                      않고 독립영역으로 설정되어도 문제 없는 영역 ex)게시판 안내
                  </p>
                  <figure>
                      <p>
                          figure는 이미지 요소를 담아서 관리하는 영역
                          figcaption요소와 함께 사용하게 되어 있음
                          imgset요소도 때에 따라 사용함. (반응형 웹 제작시)
                      </p>
                  </figure>
              </article>
              <aside>
                  <p>
                      aside는 another영역을 지칭하는 것. 사이트 구성요소에 없어도 문제x
                      있으면 도움이 되는 영역. 
                  </p>
              </aside>
          </main>
          <footer>
          	<p>
                  footer는 회사or사이트의 정보를 담고 있는 영역
                  주로 하단에 존재하는 영역(무조건x) 
                  정보가 보이지 않아도 사이트에 대한 내용은 반드시 존재해야함
              </p>
          </footer>
          
      </body>
  </html>
  ```

- 고유 이름 부여하기:  **영문소문자가 첫글자/숫자가 1글자x/특수문자 x(_,-,$제외)**

  `<class="full area_box">` : 한번에 이름 여러개 가능. 띄어쓰기로 구분. snacke_case표기법

  `<id="mainBox">` : 핵심기능에만. 한번의 이름만 존재. cameCase 표기법 사용권장



### css

#### 선택자

- 모든선택자(`*`)는 사용하지 말자

- type 선택자 : 요소 그 자체의 이름을 직접 선택

- class/id 선택자 :  .과 #을 이용하여 이름을 뒤에 붙여 사용

- 자손선택자

  `ul li{width:100%; height:80%;}` : ul안에 포함된 li에게 적용. 띄어쓰기로 구분

- 자식선택자

  `ul > li{width:100%; height:80%;}` : ul안에 바로 밑에 포함된 li에게만 적용(내자식만)

- 다중선택자 :  ,로 구분하여 여러가지 한꺼번에 선택

- 기타 다른 선택자 : 형제,인접형제 선택자, 속성선택자, nth선택자 (오늘 밑에 정리해라)

  그리고 css diner 게임 레벨업시키기



#### 우선순위

1. 뒤에서 작성한 순서로 적용

2. 요소와 class 중 class가 우선 / class와 id 중 id가 우선

   **더 디테일하게 지정한 속성을 우선으로 적용**

3. 부모요소부터 지정한게 가장 우선

   ex) `div > li{color:#fff;}`

4. 속성 자체에 직접 스타일 적용 **권장x**

   ex) `<p style="color:#fff;"></p>`

5. `li{color:#034 !important;}` **권장x**



#### reset.css [기본으로 세팅해놓기]

```html
<style>
    @charset "UTF-8"; /*css에서도 써야함*/
    
	/* reset.css */
    html, body{width:100%; height:100%;}
	html,body,h1,h2,h3,h4,h5,h6,p,div,ul,li,ol,dl,dt,dd{margin:0; padding:0;}
    /*기본속성을 초기화 시켜 새로 만들어주기 위해 사용*/
    ul,ol,li{list-style:none;} /*목록 기호 없애기*/
    header,nav,main,section,article,aside,figure,footer{display:block;}
    /*블록요소로 바꾸자*/
    
    /* design */
    여기에는 필요한 스타일
</style>
```

- 참고사이트

  [개발자eric](https://meyerweb.com/eric/css/)

  [다음](http://ui.daum.net/convention/html)



#### 단위비교

- px : 기본단위

- % : 부모영역까지 늘어나는 단위

- pt : graphic [12pt] == web[16px]

- em : graphic [16px] == web[1em]

- rem : root(최상위) em **정확한 폰트나 크기 조정가능** 

- vw(vertical width) & vh(vertical height) : **100분의 1의 단위**

  width:750px; height:900px; == width:10vw; height:100vh

  ex) 스크린 너비값에 꽉 차는 헤드라인을 만들경우,  vw로 폰트 사이즈 지정하면

  브라우저의 너비에 맞춰 변함

- vmin & vmax : 최소값 / 최대값

  

#### display

- block : 한줄 전체를 차지

- inline : 필요한 만큼만 차지. 사이즈를 가질 수 없음. block요소에 포함될 수 있음

  

- float : 공중에 띄우다라는 의미. 부모박스 위에 올라가 쌓일 수 있음

  `height:auto;` 일경우 틈이 생겨 높이가 인식되지 못한다. 

  **이걸 해결해주는 `clear:both;`** 틈이 생긴걸 채워주는 역할! 

  ->새로운 박스를 float 적용시킨 박스 밑에 만들어서 `clear:both;` 스타일 줌 

  ​	(**float,clear 동시에 사용x**)

- min-height : 최소 세로값 / max-height : 최대 세로값

  

- **IR기법[image replace]**

  존재는 하지만 화면상에서는 숨김처리하는 기법

  ```css
  #navigationBox{float:right; width:1420px; height:60px;}
  #navigationBox>h2{position:absolute; z-index:-1; width:0; height:0; 						 overflow:hidden;}
  				/* overflow:hidden; 존재는 하지만 화면상에 숨기는 기능 
  					완벽히 안보이게 하기 위해서 화면 뒤로 완전히 빼줘야 함 [IR기법]
  					position:absolute; z-index:-1;
  				*/
  ```

  

#### position

- static : position 속성 부여하지 않았을 때. default

- relative : 현재 위치에서 상대적인 속성을 줄 수 있음

- absolute : 가장 가까운 상위 요소를 기준으로 설정됨

- fixed : 화면이 바뀌더라도 고정된 위치를 설정할 수 있음

- z-index : 화면상 가장 하단(0)을 기준으로 수치를 지정하여 움직일 수 있음

  

#### white space

- margin : 내 주위에 여백주기 / **-값,auto 가능**

- padding : 나한테 직접 여백넣기 / **-값,auto 불가능**

  `border-sizing:content-box` :  여백+박스=여백 준 만큼박스 늘어남

  `border-sizing:border-box` : 여백+박스=그대로 / **겉으로 보기에 크기,위치 변하지 않음**

  

- border : 선 스타일 색상 순서로 한꺼번에 작성가능

- outline : 넷 중 유일하게 부피를 가지지 않음 /  **눈에는 보이지만 주위 박스들이 밀리지 않음**

  `outline-offset:20px;` 20px만큼 띄우고 선처리 

  -> 익스플로우는 지원x / tab키 누르면서 위치 이동시 **focus 잡을 때** 주로 사용



#### [css참고사이트](https://developer.mozilla.org/ko/) : google에 mdn float 이렇게 검색해도 좋음



#### 벤더프리픽스(prefix)

> 새로나온 css 기술을 브라우저에 보이지 않을 경우, 강제로 쓸 수 있도록 처리하는 기능
>
> 앞뒤로 벤더(-)를 붙여주고 그 안에 해당 브라우저의 형식 기입 [ `position:-webkit-sticky;` ]

- 항상 이렇게 입력하면 번거롭기 때문에 코드 한줄로  적용시킬 수 있음

1. [css3pie](http://css3pie.com/) 다운로드

2. html5shiv 적용했던 방식으로 

   html > `<script src="경로/PIE.js"> `입력

   css  > reset.css 코드 중 `behavior:url('../../경로/PIE.htc');` 입력



d



