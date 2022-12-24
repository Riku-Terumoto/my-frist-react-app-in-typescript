import React, { useState, useRef, useEffect } from "react";

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// 書き換え可能
// array[0] = 11;
// 読み取り専用の配列がuseEffectの第二引数に指定することができる
// readonlyArray[0] = 11;


// FC・・・FunctionComponentの略した表記
// useStateはtypescriptの型引数を伴う
// useStateに型制約をしておけば、変数、更新関数にも型を持たせて状態を管理することができる
// 分からなくなったら型定義を見て使う
const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue(prevState => prevState + 1);
  const decrement = () => setValue(prevState => prevState - 1);

  // useRefは引数に渡された値を書き換え可能なcurrentプロパティにセットして、返すことができる
  // currentプロパティが保持している値を書き換えて様々な処理をする
  // useRefはuseStateと同様に型引数を指定することができる
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  
  //  Non-null assertion operator・・・nullの直後に!を置くことで非nullであることをアサートすることができる
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // null、undeifinedのプロパティを参照するとエラーが発生する
    // if文でnullがない時に実行するしょりでもいいが、オプショナルチェイニングで完結に書くことができる
    // ref.current?.focus();
    ref.current.focus();
  };

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
      <input type="text" ref={ref} />
      <button onClick={focusInput}>Click Me!</button>
    </>
  )
};

export default Counter;