import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return <>

        <Head>
            <title>Ошибка 404</title>
        </Head>

  		<div className = "not-found-page">
  			<h1>Ошибка 404</h1>
  			<br />
  			<p>Страница не найдена</p>
  			<br />
  			<p><Link href = "/">На главную</Link></p>
  		</div>
  	</>
}