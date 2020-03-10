# node를 통해 가상웹주소 변경하기
1. [node](http://www.nodejs.org) 를 다운로드 받기

2. 아무곳에서 gitbash 실행

3. node 설치되었는지 확인

   ```shell
   $ node --version 
   $ npm --version  //npm은 node를 깔면 같이 오는 패키지
   ```

4. npm 기반에 browser-sync를 설치

   ```shell
   $ npm install --global brower-sync
   $ browser-sync --version  //잘 깔렸는지 확인
   ```

5. browser-sync로 파일을 서버에 열기

   ```shell
   $ browser-sync start --server
   ```

   - 그러면 브라우저가 열림 

   - 처음에는 error라고 뜸 

     ->가장 최상단 파일(index.html)이 열려서 그럼

   - **그때 웹주소창에 localhost:3000/** 이라고만 쓰여 있음

   - **localhost:3000/**뒤에 파일명(test.html) 붙여주면 파일이 서버에 열림~~ 

     ->**깔끔한 주소창을 얻을 수 있음^^**
     
     ->대신 같은 공유기끼리만 접속 가능 (외부에서 열리지 않음)

