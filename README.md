# React Hook 생각해보기

## 1. Counter - Class/Functional 컴포넌트 비교

기억할것 : 모든 렌더링은 고유의 모든 것(state, prop, event handelr ...)을 가지고 있다.

- Counter 동작방식의 차이
- Functional Component 는 상태가 바뀌어 업데이트 될때마다 함수를 전체를 다시 실행한다.
- Class based component 는 상태가 바뀌면 render 함수만 다시 실행한다.
