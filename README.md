## CRA를 사용하지 않고 프로젝트 설정하기
모든 코드는 하나하나 직접 작성 👍
<br/><br/>

## 과정

<b>1. Babel 설치</b><br/><br/>
Babel을 사용하기 위해 Babel플러그인을 모아둔 Babel 프리셋을 설치해준다.<br/><br/><br/>

<b>2. Babel 프리셋 설치</b><br/><br/>
다음으로 babel.config.json 설정 파일을 생성하고 아래와 같이 작성하여 프리셋을 사용하겠다고 설정한다.<br/>
프로젝트 폴더를 만든 후 터미널에서 명령어를 사용해 Babel을 설치하고 package.json파일을 만들어준다.<br/><br/><br/>
  
<b>3. 트랜스파일링 스크립트 추가</b><br/><br/>
ES5사양의 코드로 트랜스파일링 하려면 명령어를 사용해주어야 하는데 매번 명령어를 입력하여 트랜스파일링 하긴 번거로우니 npm script에 명령어를 등록해준다.<br/><br/>
"build": "babel src/js -w -d dist/js"<br/><br/><br/>
  
<b>4. Babel 플러그인 설치</b><br/><br/>
바벨 프리셋이 현재 사양에 대한 플러그인을 지원하지 않아서 에러가 발생할 수도 있다.<br/>
에러 내용에 따라 별도의 플러그인을 설치해준다.<br/><br/>
npm run build 명령어를 입력해주면 js파일이 트랜스파일링 되어 ES6이상의 문법이 실행된다.
<br/><br/><br/>
  
<b>5. Webpack 설치</b><br/><br/><br/>
  
<b>6. babel-loder 설치</b><br/><br/>
npm script를 수정하여 Babel이 아닌 Webpack을 실행하도록 수정한다.<br/><br/><br/>
  
<b>7. webpack.config.js 설정</b><br/><br/>
Webpack이 실행될 때 설정 파일을 참조할 수 있도록 webpack.config.js설정 파일을 작성해준다.<br/>npm run build로 Webpack을 실행하며 트랜스파일링과 번들링을 해주면 아래와 같이 dist/js폴더에 번들 파일이 생겨난다.<br/><br/><br/>
  
<b>8. babel-polyfill 설치</b><br/><br/>
webpack.config.js파일의 entry에 폴리필을 추가해준다.<br/><br/><br/>

<br/><br/>




## 세부 내용
Babel
https://bomoto.tistory.com/157

Webpack과 Polyfill
https://bomoto.tistory.com/158
