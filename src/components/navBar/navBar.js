import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'



const Navbar = () => {    
    return(        
            <nav>
                <img src='./public/imagenes/logo.jpeg' alt='Logo empresa'  />
                <section>
                    <Link>Nosotros</Link>
                    <Link to='/'>Productos</Link>
                    <Link to='/category/velas'>Velas</Link>
                    <Link to='/category/sahumerios'>sahumerios</Link>
                    <Link to='/category/perfumes'>Perfumes</Link>
                    <CartWidget />
                </section>
            </nav>        
    )
}

export default Navbar;