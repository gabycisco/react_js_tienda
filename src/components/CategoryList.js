import { Link } from "react-router-dom";

const CategoryList = () => {
    return (
    
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link className="nav-item" to='/category/1'>
                    <span className="nav-link" >Cursos</span>
                </Link>

                <Link className="nav-item" to='/category/2'>
                    <span className="nav-link" >Proyectos</span>
                </Link>

                <Link className="nav-item" to='/category/3'>
                    <span className="nav-link" >Estilos</span>
                </Link>
            </ul>
        </div>
        
    )
  }
  
  export default CategoryList;