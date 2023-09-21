export const Bag = () => {
  return (
    <>
      <p>bag page</p>
      <a href="/">back to index page</a>
    </>
  )
}

export default Bag;

// ↑このファイルはこれしか出しません、になる
// defaultを入れないと、import {Bag} from...になって{}がいる　それ以外の名前で呼び出せない

// export default Bagにすると、呼び出すときimport BagのBagを好きなように書き換えられる
// ↑ファイル名と呼び出したコンポーネントが紐づかなくなる
