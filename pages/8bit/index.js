import Head from 'next/head'
import Link from 'next/link'

export default function Index (props){

        return (
            <>
                <Head>
                    <title>Коллекция любимых игр денди - играть онлайн на сайте</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta name="description" content="Коллекция любимых игр для приставки Денди. Выбирайте любую и играйте прямо на сайте в удобном эмуляторе" />
                    <meta name="keywords" content="играть в денди онлайн, играть в онлайне игры денди, играть в денди онлайн бесплатно, игры для денди онлайн" />
                    <meta property="og:url" content="https://nostalgia-games.ru/8bit/" />
                    <meta property="og:title" content="Коллекция любимых игр денди - играть онлайн на сайте" />
                    <meta property="og:description" content="Коллекция любимых игр для приставки Денди. Выбирайте любую и играйте прямо на сайте в удобном эмуляторе" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.png" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="359" />
                    <meta property="og:image:height" content="381" />
                    <meta property="og:image:alt" content="Денди" />
                </Head>

                <div className="wrapper">
                    <div className = "main-wrapper fixed-width">

                        <h1 className="h1">Коллекция любимых игр на Денди.</h1>
                        <p className="p">Играйте прямо на нашем сайте - это абсолютно бесплатно.</p>
                        <div className = "main-games">
                            <Link href = "/8bit/super-mario-brothers" className = "main-game-item  super-mario-bros"></Link>
                            <Link href = "/8bit/contra" className = "main-game-item contra"></Link>
                            <Link href = "/8bit/battle-city" className = "main-game-item battle-city"></Link>
                            <Link href = "/8bit/chip-i-dale" className = "main-game-item chip-i-dale"></Link>
                            <Link href = "/8bit/adventure-island" className = "main-game-item adventure-island"></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }