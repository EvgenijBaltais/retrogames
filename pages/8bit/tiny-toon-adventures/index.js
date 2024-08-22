import Head from 'next/head'

export default function Index (props){

        return (
            <>
                <Head>
                    <title>Tiny Toon Adventures на денди - играть онлайн на нашем сайте</title>
                    <link rel="canonical" href="nostalgia-games.ru/8bit/super-mario-brothers/" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta name="description" content="Хотите поиграть в любимую игру Tiny Toon Adventures на денди онлайн? Тогда добро пожаловать к нам!" />
                    <meta name="keywords" content="tiny toon dendy, tiny toon adventures dendy" />
                    <meta property="og:url" content="nostalgia-games.ru/8bit/super-mario-brothers/" />
                    <meta property="og:title" content="Tiny Toon Adventures на денди - играть онлайн на нашем сайте" />
                    <meta property="og:description" content="Хотите поиграть в любимую игру Tiny Toon Adventures на денди онлайн? Тогда добро пожаловать к нам!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.png" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="359" />
                    <meta property="og:image:height" content="381" />
                    <meta property="og:image:alt" content="Dendy" />
                </Head>

                <div className="wrapper">
                    <div className = "main-wrapper fixed-width">

                        <h1 className="h1">Игра для Денди Tiny Toon Adventures</h1>
                        <p className="p">Играйте прямо на нашем сайте - это абсолютно бесплатно.</p>

                        <div className="game-frame-w">
                            <iframe className="game-frame" src="https://www.retrogames.cc/embed/17673-tiny-toon-adventures-usa.html" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>
            </>
        )
    }