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
