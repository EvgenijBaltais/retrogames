import Head from 'next/head'

export default function Index (props){

        return (
            <>
                <Head>
                    <title>Старые добрые игры для денди - играть онлайн бесплатно</title>
                    <link rel="canonical" href="https://nostalgia-games.ru" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta name="description" content="На нашем сайте можно бесплатно поиграть онлайн в старые добрые игры для денди" />
                    <meta name="keywords" content="денди онлайн играть бесплатно, игры денди играть онлайн, эмулятор денди играть онлайн" />
                    <meta property="og:url" content="https://nostalgia-games.ru" />
                    <meta property="og:title" content="Лучшие игры для денди для настоящих любителей" />
                    <meta property="og:description" content="На нашем сайте можно бесплатно поиграть онлайн в старые добрые игры для денди" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.png" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="359" />
                    <meta property="og:image:height" content="381" />
                    <meta property="og:image:alt" content="Dendy" />
                    <meta name="yandex-verification" content="1c81cc6e1ce23c9a" />
                </Head>

                <div className="wrapper">
                    <div className = "main-wrapper fixed-width">

                        <h1 className="h1">Коллекция лучших игр для приставки Денди.</h1>
                        <p className="p">Играйте прямо на нашем сайте - это абсолютно бесплатно.</p>
                        <div className = "main-games">
                            <div className = "main-game-item"></div>
                            <div className = "main-game-item"></div>
                            <div className = "main-game-item"></div>                            <div className = "main-game-item"></div>
                            <div className = "main-game-item"></div>
                            <div className = "main-game-item"></div>
                            <div className = "main-game-item"></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }