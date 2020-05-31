# React Hook 생각해보기

## 1. Counter - Class/Functional 컴포넌트 비교

기억할것 : 모든 렌더링은 고유의 모든 것(state, prop, event handelr ...)을 가지고 있다.

- Counter 동작방식의 차이
- Functional Component 는 상태가 바뀌어 업데이트 될때마다 함수를 전체를 다시 실행한다.
- Class based component 는 상태가 바뀌면 render 함수만 다시 실행한다.

## 2. PostList 추가

## 3. PostDetail 추가

- Class Component
  - componentDidMount, componentDidUpdate 추가 필요
  - componentDidUpdate 에서는 이전 prop 과 현재 prop 을 비교해서 데이터 fetch. 그렇지 않으면 무한히 fetch
  - 코드가 불필요하게 길어짐
- Functional Component
  - 데이터 동기화 관점에서 생각하면 단순
  - 코드 짧고 단순

## 4. PostDetail 다듬기

- effetc 에서만 쓰는 함수는 effect 안에!
- eslint-plugin-react-hooks 가 체크해 준다.

## 5. 함수를 deps 로 사용할 수 있을까

- 있다.
- 함수가 컴포넌트 스코프 안의 어떠한 것도 사용하지 않는다면, 컴포넌트 외부로 끌어올려두거나
- useCallback 을 이용한다.

## 6. deps 제거하기

- AutoCounter
- setCount(count => count + 1) 로 deps 를 제거 할 수 있다.
- step 추가로 인해 interval 초기화되지 않길 원한다면?
