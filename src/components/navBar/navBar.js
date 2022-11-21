import './navBar.css'


function Navbar () {
    return(
        <nav>
            <h1>logo</h1>
            <button className="botones-nav">Quienes somos</button>
            <button className="botones-nav">Productos</button>
            <button className="botones-nav">Contacto</button>
            <button className="botones-nav">Preguntas frecuentes</button>
        </nav>
    )
}

export default Navbar;