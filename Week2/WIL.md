## 웹 개발 스터디 2주차

### JavaScript가 DOM에 어떻게 접근하고 작용될까?
1. 웹 페이지의 구조와 내용을 "동적"으로 조작 
2. DOM은 웹 페이지의 HTML이나 XML 문서를 트리 구조로 표현
> HTML을 파싱하여 Parse Tree 만들기
- 파싱 : 문법에 맞는지 확인하고 Tree를 만드는 것
(DOM)
Bytes를 character로 바꿔 거기서 나올 수 있는 tokens(html,head,body ...)을 하나씩 뽑아내 Nodes를 만들고 그걸로 Tree를 만든다 
(CSSOM)
CSS 코드를 가져와서 DOM에 적용함. 하나씩 스타일 매칭함
JavaScript를 사용하여 이러한 문서에 접근하고 조작
### 브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?
1. 브라우저 동작 원리
-  HTML,CSS가 화면에 그려지는 원리
브라우저는 사용자가 선택한 자원(Resource)을 서버에 요청(Request)하고, 서버로부터 받은 응답(Response)을 브라우저에 렌더링한다.(Render)
2. 랜더링
- 브라우저를 이루는 컴포넌트
JavaScript Engine 
- 웹 페이지에서 JavaScript 코드를 해석하고 실행하는 역할 
- 브라우저의 핵심 구성 요소 :  JavaScript 코드를 처리하여 웹 페이지에 동적인 기능을 제공!
### inline CSS가 항상 좋은 것을까? 아니라면 그 이유는 무엇일까? 
> 항상 좋은 것은 아니다
#### CSS를 사용하는 방식
- CSS를 외부 모듈로 사용, head 태그에서 다운받아 사용 -> 외부 stylesheet에서 CSS를 불러오는 경우
- CSS를 inline-style 형식으로 작성 -> HTML 태그에 직접 style 주입
- inline Css를 이용할 경우
1. 유지 보수하기 어렵다
코드의 가독성이 떨어지고 여러 요소에 같은 스타일을 적용할 때 일일이 수정해야한다 : 비효율적이다
2. 똑같은 코드를 재사용 할 수 가 없다 : 반복해서 작성해야되고 코드 중복 우려
  - 네트워크 탭에 아무것도 존재하지 않게 될 수 있다
3. html과 분리가 되지 않아 코드가 혼동될 수 있다