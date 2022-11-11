import CartWidget   from './CartWidget';
import CategoryList from './CategoryList';
import imagenes     from '../assets/imagenes';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar shadow navbar-expand-lg ">
            <div className="navbar_container container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={imagenes.HamburgerV2.img}  className="hamburger_menu" alt={imagenes.HamburgerV2.alt} />
                </button>

                <Link className="navbar-brand" to='/'>
                    <img src={imagenes.CodeShopLogoDark.img}  className="logo_code_shop" alt={imagenes.CodeShopLogoDark.alt} />
                </Link>
                
                <CartWidget />
                <CategoryList />

            </div>
        </nav>
        
    )
  }
  
  export default NavBar;