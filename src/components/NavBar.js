import CartWidget from './CartWidget';
import CategoryList from './CategoryList';

const NavBar = () => {
    return (
        <nav className="navbar shadow navbar-expand-lg ">
            <div className="navbar_container container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="img/icon/hamburger_v2.png" className="hamburger_menu" alt="Menu" />
                </button>

                <a className="navbar-brand" href="#">
                    <img src="img/icon/code_shop_logo_dark.jpg" className="logo_code_shop" alt="Code Shop" />
                </a>
                
                <CartWidget />
                <CategoryList />

            </div>
        </nav>
        
    )
  }
  
  export default NavBar;