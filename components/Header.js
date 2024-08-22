
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'

const Header = () => {
    
    return (
		<header className = "header">
			<div className = "fixed-width">
				<Link href = "/">
					<Image className="main-logo" src={Logo} alt="Nostalgia-games.ru" />
				</Link>
			</div>
            <nav className = "nav fixed-width">
                <ul className = "nav-list">
                    <li className = "nav-list-item">
                        <Link href = "/8bit" className = "nav-list-link">Играть в Dendy</Link>
                    </li>
                    <li className = "nav-list-item">
                        <Link href = "/8bit" className = "nav-list-link">Играть в Sega</Link>
                    </li>
                </ul>
            </nav>
		</header>
    )
}

export default Header