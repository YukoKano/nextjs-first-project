import { useRouter } from "next/router";

const Color = () => {
  const router = useRouter();
  console.log(router);
  const { name, color } = router.query; // 新しい書き方！

  return (
    //?color=red
    // <p>colorパラメーターは{ router.query.color }です</p>
    <p>ここは{ name }の、{ color }ページです</p>
  )
}

export default Color;