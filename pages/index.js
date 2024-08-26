import Head from 'next/head'
import Link from 'next/link'

export default function Index (props){

        return (
            <>
                <Head>
                    <title>Старые добрые игры для приставок dendy и sega - играть онлайн бесплатно</title>
                    <link rel="canonical" href="https://nostalgia-games.ru" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta property="og:url" content="https://rooms-booking.ru" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.png" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="359" />
                    <meta property="og:image:height" content="381" />
                    <meta property="og:image:alt" content="" />
                </Head>

                <div className="wrapper">
                    <div className = "main-wrapper fixed-width">
                        <h1 className="h1">Коллекция лучших игр для приставки Денди.</h1>
                        <p className="p">Играйте прямо на нашем сайте - это абсолютно бесплатно.</p>
                        <div className = "main-games">
                            <Link href = "/8bit" className = "main-game-console dendy"></Link>
                            <Link href = "/16bit" className = "main-game-console sega"></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }