import Link from "next/link"
import Image from "next/image";
// 別ドメインの画像を参照する場合、configファイルを変更する必要がある

import Head from "next/head";

const products = [{ name: "bag" }, { name: "shoe" }, { name: "socks" }]; // 通常ならpropsでmetaだし分けるよ

import { WelcomeText } from '../components/WelcomeText';

export default function Home() {
  return (
    <>
      <Head>
        <title>{ products[0].name }</title>
        <meta name="description" content={`${ products[0].name }のページ`} />
        <meta property="og:title" content={ products[0].name } />
        <meta property="og:description" content={`${ products[0].name }のページ`} />
      </Head>
      <ul>
        {products.map((products) => {
          return (
            <li key={products.name}>
              <Link href={{
                pathname: `products/${products.name}`,
                // query: { name: "test" }
              }}
              >{ products.name }</Link>
            </li>
          )
        })}
        <li>
          <Link href="about">about</Link>
        </li>
      </ul>
      <p>welcome to index page</p>
      <WelcomeText />
      <Image src="/favicon.ico" width="200" height="200" />
    </>
  )
}
