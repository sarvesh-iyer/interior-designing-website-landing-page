import { useEffect, useState } from 'react'
import Logo from '../assets/images/logo/logo.png'
import HamburgerMenuIcon from '../assets/images/general/hamburger-menu.png'
import { menuItems } from '../data/navMenuItemList'

export const Navbar = () => {

    const [showDrpDownMenu, setShowDrpDownMenu] = useState(false)

    useEffect(() => {
        const closeDropDownOnOutsideClick = (e) => {
            let isClosest = e.target.closest('.hamburger-menu') ? true : false
            if(!isClosest) setShowDrpDownMenu(false)
        }

        document.addEventListener('click', closeDropDownOnOutsideClick)
        return () => {
            document.removeEventListener('click', closeDropDownOnOutsideClick)
        }
    }, [])
    
    const handleMenuOpen = () => {
        setShowDrpDownMenu(!showDrpDownMenu)
    } 

    return (
        <nav className="navbar-wrapper">
            <div className="logo">
                <div className="hamburger-menu" onClick={handleMenuOpen}>
                    <img src={HamburgerMenuIcon} alt="" />
                </div>
                <a href="#hero">
                    <img src={Logo} alt="" />
                </a>
                {showDrpDownMenu && (
                    <span className="hamburger-menu close-icon" onClick={handleMenuOpen}>
                        &#10006;
                    </span>
                )}
            </div>
            <ul className="nav-list">
                {menuItems?.map(item => {
                    return (
                        <li key={item?.id} className="nav-list-item">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
            {showDrpDownMenu && (
                <ul className="drop-down-menu">
                    {menuItems?.map(item => {
                        return (
                            <li key={item?.id} className="nav-list-item">
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            )}
        </nav>
    )
}
