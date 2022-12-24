import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// IntrinsicAttributesはinterfaceのReact.Attributesを継承している（型定義を覗けばわかる）
// Attributesはkey属性をオプショナルな属性として許可しているためエラーが出ない（messageは無いから出る）
// Attributesに追加したらエラーは出なくなる（ライブラリ側の実装なので追加したら正常に動かなくなるから確認のためだけに追加）
// type Foo = JSX.IntrinsicAttributes;

ReactDOM.render(<App />, document.getElementById('root'));
