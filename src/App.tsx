import React from 'react';
// import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}


// Reactが提供しているFunctionComponentの型アノテーションは型引数を受け取れる
// コンポーネント自体に型制約をせず、引数に直接型制約するとデフォルト値の型が間違っていてもエラーにならない
// なぜならApp自体にデフォルト値を指定しているから
// 関数コンポーネントを利用するときは必ず、関数（コンポーネント）自体に型制約するのが型安全に繋がる
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <div>{message}</div>
      {/* <Counter /> */}
      <CounterWithReducer />
    </>
  );
};

// propsにデフォルト引数を持たせることができる
App.defaultProps = {
  message: 'Hello, defaultProps!',
  // description: 'This is App component.'
}

export default App;
