import classes from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={`${classes.navBar}`}>
            <div className={`${classes.logo}`}>
                <Link to='/'>Cart--ox</Link>
            </div>
            <div className={`${classes.navLinks}`}>
                <Link to='/category/ferrari'>Ferrari</Link>
                <Link to='/category/astonmartin'>Aston Martin</Link>
                <Link to='/category/peugot'>Peugot</Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar