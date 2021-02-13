<h2>TypeScript</h2>

1. 환경설정

   * Node.js 설치
   * git bash 설치
   * Visual Studio Code 설치
     

2. Visual Studio Code 설치 후 익스텐션 설치

   - Prettier : 코드 보기 좋게 
   - ESLint : 코드 검사, 경고
   - Path Intellisense : 자동완성
   - Bracket Pair Colorizer : 짝이 맞는 괄호끼리 색으로 구분시켜줌
   - Material Icon Theme : 예쁜 아이콘
     

3. Type Script 사이트 접속 'Install locally' 클릭 (npm으로 설치)
   **설치 코드를 복사할 수 있음**

4. git bash 실행시켜 `npm install -g typescript` 입력
   

5. Visual Studio Code로 돌아와 파일 만들기

   - 폴더 생성
   - 예시 파일 생성 (index.html , test.ts)
     

6. VSC 터미널을 gitbash로 실행시키도록 변경해주기

   - 설정창 들어가서
   - terminal.integrated.shell.windows 검색
   - 자신의 gitbash 저장 경로를 변경해주면 됨 `설치경로\\bin\\bash.exe`
   - VSC 껐다가 다시 키면 gitbash로 바뀌어져 있음
     

7. test.ts 안에 예시 코드 작성
   

8. ts파일을 js파일로 컴파일 하는 방법

   - 터미널 켜서 `tsc test.ts ` 작성하면

   - test.js 파일 생성되어 있음

   - 하지만 VSC 버그로 인해 에러가 생성됨(문제는 없음)

   - 버그를 없애주기 위해 `tsc --init`

   - 그럼 tsconfig.json 파일 생성되면서 에러 사라짐

     

9. ts파일을 수정할 때마다 js파일이 함께 업데이트 되도록 

   - ts파일에서 터미널 켜서 `tsc -w`  (*w  : watch 감시하다*)
   - 그럼 이제 ts파일과  js파일이 동시에 수정됨

