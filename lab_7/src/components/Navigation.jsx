import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/">Головна</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog">Каталог</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Кошик</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Про нас</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;