import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  console.log(router);
  return (
    //?color=red
    // フォルダを作ると階層分けもできます
    <>
      <p>product/〜〜の何が来ても表示される、product pageで、ここは{router.query.name}のみです</p>
      <a href="shoe/red">go to red page</a>
    </>
    // 場所の参照の仕方もう少しありそう
  )
}

export default Name;