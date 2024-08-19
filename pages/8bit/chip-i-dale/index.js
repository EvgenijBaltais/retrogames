import Head from 'next/head'

export default function Index (props){

        return (
            <>
                <Head>
                    <title>Чип и Дейл (Chip`n Dale Rescue Rangers) на денди - играть онлайн на нашем сайте</title>
                    <link rel="canonical" href="nostalgia-games.ru/8bit/chip-i-dale/" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta name="description" content="Хотите поиграть в любимую игру Чип и Дейл (Chip`n Dale Rescue Rangers) на денди онлайн? Тогда добро пожаловать к нам!" />
                    <meta name="keywords" content="чип и дейл играть онлайн денди, чип и дейл играть на денди, денди чип и дейл играть бесплатно" />
                    <meta property="og:url" content="nostalgia-games.ru/8bit/chip-i-dale/" />
                    <meta property="og:title" content="Чип и Дейл (Chip`n Dale Rescue Rangers) на денди - играть онлайн на нашем сайте" />
                    <meta property="og:description" content="Хотите поиграть в любимую игру Чип и Дейл (Chip`n Dale Rescue Rangers) на денди онлайн? Тогда добро пожаловать к нам!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.png" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="359" />
                    <meta property="og:image:height" content="381" />
                    <meta property="og:image:alt" content="Dendy" />
                </Head>

                <div className="wrapper">
                    <div className = "main-wrapper fixed-width">

                        <h1 className="h1">Игра для Денди Чип и Дейл (Chip`n Dale Rescue Rangers)</h1>
                        <p className="p">Играйте прямо на нашем сайте - это абсолютно бесплатно.</p>

                        <div className="game-frame-w">
                            <iframe  className="game-frame"src="https://www.retrogames.cc/embed/17102-chip-n-dale-rescue-rangers-usa.html" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>
            </>
        )
    }