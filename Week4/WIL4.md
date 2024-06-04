## 웹 개발 스터디 4주차

 ### 301,303 요청을 하였을 때,왜 httpstat.us 페이지의 메인으로 redirect될까?
3xx(Redireciton) : 클라이언트의 요청을 끝마치기 위해서,웹 브라우저의 추가적인 동작이 필요한 상태
1. 301 Moved Permanently : 지정한 리소스가 새로운 URL로 이동한다
2. 303 See Other : 클라이언트가 요청한자원을 다른 URL에서 가져오도록 지시한다
> 이 두 경우 모두 httpstat.us는 이러한 상태 코드의 동작을 시연하기 위해 의도적으로 메인 페이지를 리디렉션 대상으로 설정한 것 
>   > 이 HTTP 응답을 어떻게 처리하는지 직접 확인 가능
### 401 요청을 하였을 때, 네트워크 탭의 상태를 보고 어떻게 인증해야 하는지 www-Authemticate 헤더를 기반으로 설명해보자
401 Unauthorized : 클라이언트 요청이 해당 리소스에 대한 인증이 필요함
-  www-Authemticate 헤어에 인증 관련 정보를 채워넣어야함
- Authentication, 즉 인증이 되지 않은 요청을 의미한다 
- www-Authemticate : 리소스 접근 시 필요한 인증 방법을 정의해둔 헤더
- www-Authemticate 헤더 분석 : 다양한 인증 스키마 제공 가능
1. Basic
2. Bearer
3. Digest
4. OAuth
> HTTP 요청시 401 응답 확인하고 www-Authemticate 헤더를 분석한다
>   > 적절한 인증 스키마를 선택해 클라이언트가 인증을 수행할 방식을 결정한다
>   >   > 선택한 인증 스키마에 따라 필요한 인증 정보를 구성
>   >   > 구성한 인증 정보를 요청 헤더에 추가하여 다시 요청을 보낸다
### Google에 “Hello”를 입력하여 결과물을 보고, 네트워크 요청 탭에서 캐시 관련 정보가 어디에 저장되어있는지 분석하여 보자
- 개발자 도구 열어 네트워크 탭을 선택하여 Hello 검색한다
#### 캐시 관련 헤더 분석
1. Response Headers (응답 헤더) : Cache-Control, Expires,ETag, Last-Modified
2. Request HEaders(요청 헤어) : If-None-MAtch,If-Modified-Since
-> 이러한 정보들이 브라우저가 리소스의 유효성을 검증하고,캐시된 리소스를 사용할지 여부를 결정하는데 사용한다 
### 더 알고 싶은 상태코드를 직접 체험해보고, 해당 상태코드에서 진행한 요청 헤더,응답 헤더를 직접 정리하여 분석해보자
상태 코드: 인터럽트의 처리,직접 메모리 접근 요구의 처리,입출력 명령 수행 등과 같은 중앙처리 장치의 상태를 표시하는 코드
- 401 Unauthorized 상태코드 체험하기
1. 개발자 도구 열고 특정 상태 코드 발생시킨다
- httpstat.us/401입력
2. 네트워트 요청을 확인(요청 헤더와 응답 헤더를 확인)
> 요청 헤더 분석
- GET/401 HTTP/1.1 : 클라이언트가 /401 경로로 GET 요청을 보냄
- HOST : 요청하는 서버의 호스트 명 (httpstat.us)
- User-Agent: 요청을 보내는 클라이언트의 브라우저 정보
- Accept : 클라이언트가 수용 가능한 인코딩 타입
- Accept-Encoding,Accept-Language : 클라이언트가 수용 가능한 인코딩 타입과 선호하는 언어
> 응답 헤더 분석
- HTTP/1.1 401 Unauthorized : 서버가 요청을 처리하지 않았으며, 인증이 필요하다고 제시
- Cache-Control:no-cache : 캐시되지 않았다
- Pragma:no-cache : HTTP/1.0과의 호환성을 위해 추가된 헤더(캐시되지 않음)
- Content-Length:0 : 응답 본문의 길이가 0인 것을 나타낸다
- Expires:-1 : 응답이 만료된다
