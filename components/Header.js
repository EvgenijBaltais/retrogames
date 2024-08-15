
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
		</header>
    )
}

export default Header