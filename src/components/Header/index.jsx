
import { Link } from 'react-router-dom'

import './header.css'
import './menuToggle.css'

function Header() {

    let show = true

    function menuToggle() {

        const navbar = document.querySelector(".navbar-container")
        const menu = navbar.querySelector(".menu-Toggle")
        const html = document.querySelector("html")
        html.style.overflow = show ? 'hidden' : 'initial'

        menu.classList.toggle("on", show)
        navbar.classList.toggle("on", show)
        show = !show
    }

    function close() {

        const html = document.querySelector("html")
        html.style.overflow = show ? 'initial' : ''
        document.querySelector(".navbar-container").classList.remove("on")
        document.querySelector(".menu-Toggle").classList.remove("on")
        show = !show
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='menu-Toggle' onClick={() => menuToggle()}>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
                <nav className='navbar'>

                    <Link to='/'>
                        <div className="logo-container">
                            <div className='logoL'></div>
                            <div className='logoR'></div>
                            <div className="logo-barra"></div>
                        </div>
                    </Link>

                    <ul className='navbar-items' >
                        <li><Link to='/' onClick={() => close()} className='nav-link'> Home </Link></li>
                        <li><Link to='projetos' onClick={() => close()} className='nav-link'>  Projetos </Link> </li>
                        <li><Link to='contato' onClick={() => close()} className='nav-link'>  Contato </Link> </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header