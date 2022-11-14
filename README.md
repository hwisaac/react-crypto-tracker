# React crypto tracker
- npx create-react-app react-crypto-tracker --template typescript 
## 설치

- react-router-dom 과 react-query 와 스타일컴포넌트 설치
- npm i react-router-dom react-query styled-components

## 타입스크립트 에러 해결

`npm install --save-dev @types/styled-components`
`npm i --save-dev @types/react-router-dom`
명령어를 실행해서 타입스크립트한테 설명해줘야 한다.

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
// Coin.tsx
import { useParams } from "react-router";
const { coinId } = useParams<RouteParams>();
```

를 통해 coinId= bts 로 저장된다.

## reset.css 처럼 global 하게 적용하고 싶은 경우

import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle` `
로 글로벌 스타일을 생성하고
Fragment 라는 걸 사용하면 (유령 컴포넌트) 붙어있는 것들을 한번에 랜더링한다. <></>

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

const { state } = useLocation<RouteState>(); // state 데이터를 받는법
console.log(useLocation())
// { pathname: '/bnb-binance-coin', search:'', hash:'', state:{name: 'Binance Coin}, key:'avivim' }
```

## 06 data types

### 인터페이스 정리하기

1. object 를 콘솔에 일단 찍는다.
2. 해당 오브젝트를 우클릭해서 'Store object as global variables' 로 temp 변수에 저장한다.
3. Object.keys(temp1).join() 로 만든 문자열을 복사해서 vscode 에 붙여넣기
4. comma(,) 를 모두 선택하고 엔터를 눌러서 줄바꿈을 해준다.
5. 문자열을 선택한 뒤 command + shift + L 을 해서 커맨드를 받은 다음 각 줄의 끝에 세미콜론(;) 을 달아준다.

6. Object.value(temp1).map(v => typeof v).join() 로 만든 문자열을 복사해서 vscode 에 붙여넣기 한다.
7. 모든 comma(,) 를 선택해서 삭제한다.
8. 이제 남은 문자열을 잘라내서
9. 위에 만든 인터페이스 문자열을 선택한뒤 command + shift + L 을 해서 커서가 나오면 붙여넣기를 한다.

### Array 인 경우 단순히 object 타입으로 설정됐을 수가 있다. eg. tags

- 인터페이스를 새로 정의해서 할당해준다.

## 07 Nested Router

### priceInfo?.max_supply 문법의 에러처리

priceInfo 가 없거나 undefined 거나 존재하지 않으면 max_supply 를 요구하지 않고, 있으면 요구함.
priceInfo.max_supply 였으면. 항상 priceInfo 의 max_supply 를 요구하기 떄문에 에러 발생할 수 있음

### nested router 를 사용하는 이유

- route 를 랜더를 하는 route 를 만들 때
- 페이지 내의 탭이 있거나 섹션으로 분리 될 때, state 대신 url 을 이용해 컨트롤할 수 있다.
- 유저들이 스크린이나 차트에 다이렉트로 접속할 수 있게 해준다.
- 예를들면 /btccoin 에서 가격탭을 선택했다. 주소가 /btcoin/price 로 변경되며, price 탭이 선택되어 보여진다. 하지만 페이지 전환을 일으키진 않는다.
- url이 useState 보다 활용성이 높은 이유는 url 주소만으로 해당 페이지를 즉시 보여주기 때문이다.
- useState 는 state 가 트리거가 되서 랜더링 되지만, nested router 는 주소 변경이 트리거가 되서 랜더링 된다.

### nested router 사용예시

```javascript
// routes/Coin.tsx
// 컨트롤러 Link 를 쓰면 새로고침을 안한다.
<Tabs>
  <Tab isActive={chartMatch !== null}>
    <Link to={`/${coinId}/chart`}>Chart</Link>
  </Tab>
  <Tab isActive={priceMatch !== null}>
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>
// nested 라우트 URL 컴포넌트
<Switch>
  <Route path={`/${coinId}/price`}>
    <Price />
  </Route>
  <Route path={`/${coinId}/chart`}> // <Route path={`/:coinId/chart`}>
    <Chart />
  </Route>
</Switch>
// 다른컴포넌트들
```

### useRouteMatch 라는 Hook 에 대해

- useRouteMatch('주소'); 는 null 이나 object를 반환한다.
- useRouteMatch 는 특정한 URL 에 있는지 여부를 알려준다.
- 해당 주소에 없으면 null이고, 있으면 관련된 정보를 가진 Object

#### useRouteMatch 사용법

```javascript
import {useRouteMatch} from "react-router-dom";
// "/:coinId/price" 주소에 없으면 null 을 반환하고, 해당 주소에 있으면 priceMatch 오브젝트 그걸 알려준다.
const priceMatch = useRouteMatch("/:coinId/price");
console.log(priceMatch);
/* priceMatch Object
{ isExact: true ,
  params: {coinID: 'btc-bitcoin'},
  path: "/:coinId/price",
  url: "/btc-bitcoin/price", }
/*
```

## 09 React Query part One

- 리액트쿼리는 로직들을 축약해서 자동화 해준다.
- coin Screen 에서, 데이터를 위한 State와 로딩을 위한 State 를 이용해서, 데이터가 준비되면 데이터를 state에 넣고 로딩을 false로 놨다. 하지만 리액트쿼리는 이 모든 것을 알아서 처리해준다.
- 리액트쿼리는 받아온 데이터를 **캐시**에 저장해두기 때문에 데이터를 매번 fetch 하는데 로딩을 일으키지 않는다.

### 리액트쿼리 설치

npm install react query

### 리액트쿼리 사용

1. queryClient 를 만든다.
2. queryClientProvider 를 만든다. (provider는 그 자식요소들이 해당 provider로 접근하는 걸 의미한다.)
3. 프로바이더로 컴포넌트들을 감싸준다.

- QueryClientProvider 는 client 에 props 를 필요로 한다.

```javascript
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</QueryClientProvider>;
```

### fetcher 함수

- 리액트쿼리를 쓸려면 우선 fetcher 함수를 만들어야 한다.
- API 와 관련된 것들은 컴포넌트들과 멀리 떨어져 있도록 하자 (컴포넌트가 fetch 하지 않도록)
- fetch 에 대한 함수는 api.ts 로 관리한다.
- **중요: fetcher 함수는 fetch promise (json date의 Promise)를 리턴해야 한다!**

```javascript
// ./src/api.ts
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
```

### useQuery 사용

- `const {isLoading, data} = useQuery("allCoins", fetchCoins);`
- `useQuery("쿼리key", fetcher함수)` 는 `fetcher`를 가져오고 `fetcher` 가 로딩중에는 `isLoading`가 `true` (data는 undefined), `fetcher` 가 로딩이 끝나면 `false`로 변경된다.
- fetcher 가 끝나면 fetcher의 json리턴을 data 에 저장한다.
- key 값은 유일해야 한다. key 값으로 캐시에 저장하고 불러와야 하기 때문

```javascript
// Coins.tsx
import { useQuery } from "react-query";
const { isLoading, data } = useQuery("allCoins", fetchCoins);
```

## 10 React Query part Two

### Devtools

- 개발할 때 데이터를 확인할 수 있는 컴포넌트.
- 랜더할수 있는 component
- 리액트쿼리에 있는 devtools를 import 해오면 캐시에 있는 query 를 볼 수 있다.

### Devtools 사용

```javascript
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />;
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
```

### useQuery() 에서 중복문제 해결

- 키값 중복 문제

```javascript
const {} = useQuery(coinId, () => fetchCoinInfo(coinId));
const {} = useQuery(coinId, () => fetchCoinTicker(coinId));
```

위에서 동일한 키값으로 coinId 가 들어가고 있다. 어떻게 해결해야 할까?
배열을 이용한다!

```javascript
// 해결
const {} = useQuery(["info", coinId], () => fetchCoinInfo(coinId));
const {} = useQuery(["tickers", coinId], () => fetchCoinTicker(coinId));
```

-- isLoading,data 변수 중복문제

```javascript
// isLoading과 data가 중복된다
const { isLoading, data } = useQuery(["info", coinId], () =>
  fetchCoinInfo(coinId)
);
const { isLoading, data } = useQuery(["tickers", coinId], () =>
  fetchCoinTicker(coinId)
);
```

- `isLoading` 을 `isLoading:infoLoading` 으로 바꿔준다.

```javascript
// 해결
const { isLoading: infoLoading, data: infoData } = useQuery(
  ["info", coinId],
  () => fetchCoinInfo(coinId)
);
const { isLoading: tickerLoading, data: tickersData } = useQuery(
  ["tickers", coinId],
  () => fetchCoinTicker(coinId)
);
```

## 13 Pricing chart part2

### apexcharts.js

- ApexCharts 는 자바스크립트 chart library 이다.
- 설치 : `npm install --save react-apexcharts apexcharts`

#### Apex Charts 사용

- 이미 Chart 라는 컴포넌트명을 사용하고 있으므로 ApexChart 라는 컴포넌트명을 써보자

1. 컴포넌트를 import 한다 (Chart, ApexCahrt)
2. 컴포넌트를 배치한다.
3. props 로 원하는 데이터를 전송한다.

- series 인 props 에는 우리가 보내고 싶은 모든 data가 들어있다

```javascript
import ApexChart from "react-apexcharts";

<ApexChart
  type='line'
  series={[
    {
      name: "Price",
      data: data?.map((price) => price.close) as number[], // ts가 숫자배열로 여기게 한다.
    },
  ]}
  options={{
    theme: {
      mode: "dark",
    },
    chart: {
      height: 300,
      width: 500,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    grid: { show: false },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
  }}
/>;
```

### 에러해결

> Overload 1 of 2, '(props: Props | Readonly): ReactApexChart', gave the following error.
> Type '{ name: string; data: any[] | undefined; }' is not assignable to type 'number'.
> Overload 2 of 2, '(props: Props, context: any): ReactApexChart', gave the following error.
> Type '{ name: string; data: any[] | undefined; }' is not assignable to type 'number'.
>
> 이런 에러 뜨시는 분들은
>
> data: data?.map((price => price.close)) ?? [],
>
> 이렇게 변경해주시면 됩니다!

## 15 Final Touches

### useQuery 훅의 세번째 argument

- useQuery("key", fetcher, Object)
- 세번째 Object 는 넣어도 되고 안넣어도 된다.
- Object

1. reFetchIntaval : 쿼리를 refetch 하는 시간

### react-helmet

1. 설치 : `npm install react-helmet`
2. ts 한테 알려주기: `npm i --save-dev @types/react-helmet`
3. react-helmet 의 helmet 컴포넌트는 무엇을 랜더링 하든 문서의 <head> 로 보내버린다.
4. helmet 은 head 로 가는 direct link 이므로 넣고 싶은걸 다 넣을수 있다.

- favicon, css , ...

```javascript
// Coin.txt
import { Helmet } from "react-helmet";

<Helmet>
  <title>
    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
  </title>
</Helmet>;
```

## 코드챌린지

- 뒤로가기 버튼 만들기
- price 탭 완성시키기
- chart 에서 캔들차트로 바꿔보기

## STATE MANAGEMENT

## Recoil

- 리코일은 페북에서 만든 state management 라이브러리 (다른 걸로는 redux 가 있다.)
-
