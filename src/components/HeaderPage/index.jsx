import logoImage from '../images/logo.svg'
import hambImage from '../images/icon-hamburger.svg'
import closeMenuImage from '../images/icon-close-menu.svg'
import { useEffect, useState } from 'react'

export default function HeaderPage() {

    const [openMenu, setOpenMenu] = useState(false)
    // por ser uma função de callback, não preciou nomeá-la
    useEffect(() => {
        if (openMenu) {
            document.documentElement.style.overflow = 'hidden';
            // o pai (documentElement) de todos herda o hidden
        }
        else {
            document.documentElement.style.overflow = 'auto';
        }

    }, [openMenu])

    return (
        <>
            <div className="containerHeader">
                <div className="menuHeader">
                    <div className="containerOpMenu">
                        <div className="logoPage">
                            <img id='imgLogo' src={logoImage} />
                        </div>
                        <div className={`hamburguerImage ${openMenu == true ? 'active' : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
                            <img src={hambImage} />
                        </div>
                        <div className={`closeMenuImg ${openMenu == true ? 'active' : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
                            <img src={closeMenuImage} />
                        </div>
                    </div>

                    <div className={`menuOpen ${openMenu == true ? 'active' : ''}`}>
                        <div className="opMenuM">
                            About
                        </div>
                        <div className="divisoriaM">
                            __________________________________________________________________________________________________________________________________________________________________________
                        </div>
                        <div className="opMenuM">
                            Discover
                        </div>
                        <div className="divisoriaM">
                            __________________________________________________________________________________________________________________________________________________________________________
                        </div>
                        <div className="opMenuM">
                            Get Started
                        </div>
                    </div>
                    <div className="optionsMenu">
                        <span id='About'>About</span> <span id='Discover'>Discover</span> <span id='getStarted'>Get Started</span>
                    </div>
                </div>
            </div>
            <div className={`shadowMenu ${openMenu == true ? 'active' : ''}`}></div>
        </>


    )
}