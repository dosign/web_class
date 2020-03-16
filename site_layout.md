# 웹 사이트 레이아웃 잡기

1. [GDWEB](http://www.gdweb.co.kr/main/index.asp) 에서 원하는 사이트 고르기

2. 사이트 정하면 `ctrl + s` 저장

3. html , 이미지 파일 폴더 생성됨

4. 웹사이트 전체 이미지를  가지고 일러스트로 go

5. width: 1920 기준으로 제작 

6. 이미지 불러올 땐 일러스트파일과 같은 폴더에 저장해놓고

   이미지 포함시키지 않고 가져오기! (용량절약)

7. 영역별로 박스 그리기 (크기는 웬만하면 짝수로 / 무채색으로)

8. 큰영역->상세하게 순서로 

9. 글씨와 아이콘 넣어주기

   **해당 아이콘 가이드라인 찾아보고 규정에 맞게 로고 다운받아 넣기**
   
10. [웹접근성 연구소](https://www.wah.or.kr:444/)

11. [명도확인프그램](https://developer.paciellogroup.com/resources/contrastanalyser/)

    CCA-Setup-1.2.1.msi 권장 || CCA-1.2.1.zip부터 받아도 됨
    
    

---



### 사이트 구축 기본사항

1. 사이트 카테고리별로 h1~h6 구분 (gitmind)

2. 기본 세팅 후 큰틀로 영역 나누기

   ```html
   <body>
       <div id="wrap">
           <header id="headBox">
               <h1>sitename</h1>
               <nav id="navBox">
                   <h2>영역마다 제목은 반드시 적어두기</h2>
           	</nav>
           </header>
           <section id="viewBox">
           </section>
           <article id="guideBox">
           </article>
           <aside id="sideBox">
           </aside>
           <footer id="footBox">
           </footer>
       </div>
   </body>
   ```

3. chrome 확장프로그램 > chromeVox 설치

   > 코드를 소리로 읽어주는 프로그램 
   >
   > 누가 들어도 보아도 예상 할 수 있게 적어야 한다.

   **wal-aria** 속성 찾아보기

   

4. css는 `<link rel="stylesheet" href="./css/src/site.css"`/> 불러오기

   **css파일은  css/src 만들어서 따로 저장해두기**

5. 

