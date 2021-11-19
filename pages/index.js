import Link from 'next/link';
import Header from '../components/Header'
import Head from 'next/head';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>메인 :: cafe : 온라인 커피 주문 </title>
      </Head>

      <Header/>

      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Cafe</h1>
        <p className="col-md-8 fs-4">
          온라인으로 주문하고 편하게 커피를 받아보세요.
        </p>

        <Link href="/introduce">
          <button className="btn btn-primary btn-lg mr-3" type="button">Cafe 소개</button>
        </Link>
        <Link href="/order">
        <button className="btn btn-outline-primary btn-lg" type="button">주문하기</button>
        </Link>
      </div>
    </div>
    </div>
  )
}
