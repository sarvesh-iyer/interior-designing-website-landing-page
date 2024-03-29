import Logo from '../assets/images/logo/logo.png'

export const Navbar = () => {

    const menuItems = [
        {
            id: 1,
            name: "Why Choose Us",
            link: "#why-choose-us"
        },
        {
            id: 2,
            name: "Gallery",
            link: "#gallery"
        },
        {
            id: 3,
            name: "Design session",
            link: "#design-session"
        },
    ]

    return (
        <nav className='navbar-wrapper'>
            <div className="logo">
                <a href="#hero">
                    <img src={Logo} alt="" />
                </a>
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
        </nav>
    )
}
