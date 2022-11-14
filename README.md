## 설치

npm i react-router-dom react-query styled-components

## 타입스크립트 에러 해결

`npm install --save-dev @types/styled-components` 명령어를 실행
`npm i --save-dev @types/react-router-dom`

## Router.tsx 설명

```javascript
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId'>
          <Coin />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
```

스위치는 한개만 랜더링 시킨다.
주소:/ 은 Coins 를 랜더링
주소:/bts 는 Coin 을 랜더링

## Coin.tsx 에서 주소에 대한 파라미터를 가져오는 방법

```javascript
import { useParams } from "react-router";
const { coinId } = useParams<RouteParams>();
```

를 통해 coinId= bts 로 저장된다.

## reset.css 처럼 global 하게 적용하고 싶은 경우

import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle` `
로 글로벌 스타일을 생성하고
Fragment 라는 걸 사용하면 (유령 컴포넌트)) 붙어있는 것들을 한번에 랜더링한다. <></>

## a 태그 대신 Link 컴포넌트를 사용하자!

- a태그는 새로고침을 일으킨다. Link 컴포넌트를 사용해서 페이지를 바꾸도록 하자!
- <Link to={`${coin.id}`}>링크</Link>
- Link 컴포넌트를 사용해도 스타일을 적용할 떄는 a 태그에 적용하듯이 선택하면 된다.

## 04 route states

- Link to를 통해 object(데이터) 자체도 보낼 수 있다.
- 데이터를 받을때는 useLocation(); 을 이용한다.

```javascript
// src/routes/Coins.tsx
// 오브젝트를 보내는 법
<Link
  to={{
    pathname: `/${coin.id}`,
    state: { name: coin.name },
  }}></Link>
```

```javascript
//Coin.tsx 에서 정보 받는 방법은 useLocation 을 이용한다.
import { useLocation } from "react-router";

const { state } = useLocation<RouteState>(); // state데이터를 받는법
console.log(useLocation())
// { pathname: '/bnb-binance-coin', search:'', hash:'', state:{name: 'Binance Coin}, key:'avivim' }
```
