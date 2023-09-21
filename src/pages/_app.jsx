import '@/styles/reset.css'
import Layout from '../components/Layout' // 各ページではなくここに入れると、stateの値が保持される
// ページごとにgetLayoutを使えば異なるレイアウトにすることもできる

// どのページでも共通のスタイル

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
