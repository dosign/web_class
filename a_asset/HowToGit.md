# git 사용하기

- git 시스템
- git 사용방법



###  git 시스템

---

​	git은 리누스  토발즈가 개발한 것으로 **누구나 무료로 자유롭게** 사용하자 라는 이념을 가지고 있다. 

​	[ 대략적인 시스템은 사용자가 따로 백업파일을 가지고 있지 않아도 **컴퓨터에 작업파일 히스토리**를

​	남겨서 이전 파일들을 쉽고 빠르게 확인이 가능하다 ]



### git 사용방법

---

1. create repository `gitEx20200309`

   > 내컴퓨터에 git과 소통할 폴더 만들고
   >
   > 그 폴더 안에서 gitbash 실행

   

2. git clone

   ```shell
   $ git clone github에서 복사해온 주소 
   ```

   -> (master) 가 생기면 완성!

   ​	git 명령어를 사용하지 못한다고 한다면 최초 세팅을 해야함▼

   ```shell
   $ git config --global user.email ""
   $ git config --global user.name ""
   ```

   

3. file 생성 : `README.md`, `makeFileData.md` 

   ```shell
   $ touch README.md makeFileData.md
   $ echo "내용입력" >> README.md && echo "내용입력" >> makeFileData.md
   $ git add README.md && git add makeFileData.md
   $ git commit -m "무슨 내용의 파일인지 설명"
   ```

   - 파일을 전송할 땐 **add**

   ``` shell
   $ git add [폴더 및 파일명] // 파일 개수 100개 이상 / 100MB 이상 한꺼번에 첨부X
   						// 한달 기준 1기가 제한
   ```

   - 전송한 파일을 모두 삭제하고 싶을 땐 **reset**

   ``` shell
   $ git reset HEAD		// 첨부(add)한 것들을 모두 삭제하고 맨처음으로 돌아감
   $ git commit --amend	// 첨부내용 작성한 메세지만 변경
   ```

   - 현재 상태를 알고 싶을 때 **status**

   ``` shell
   $ git status			// 붉은색 글씨는 첨부 안된 것
   						// 녹색글씨는 첨부된 것(new, modify ...)
   						// 내용이 없는 것은 전송할 자료가 없거나, commit이 되어 전송 전 상태
   ```

   

4. git push (보내기) 

5. github.com 홈페이지에서 내용 수정 후

6. git pull (받기)  [**그래야 충돌나지 않음**]

   - 만약 merge branch 'master' ~ 이라는 에러나면서 빔뜨면 탈출하는 방법은  **:q!**

7. 다른 폴더에서 git clone 처리 후 내용 수정 후

8. git push

9. 원래 있던 폴더에서 git pull 하지 않고 내용 수정 후 [**받지 않으면 에러생김**]

10. git push -> 에러 수정 후 git push [**git pull 하면 에러 해결^-^**]

11. 다른 폴더에서도 git pull

12. 로컬(내컴퓨터), github.com 페이지의 repository 모두 삭제

    >  gitEx20200309 repository - setting - 맨 밑에 Danger Zone - delete 클릭 - 내이름/삭제할 폴더

13. 1-13번까지 4-5번  반복
