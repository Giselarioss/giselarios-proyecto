import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'



function Navbar (props) {
    console.log(props)

    const handleOnClick = () =>{
        alert('click')
    }
    const handleOnClick2 = () =>{
        alert('click 2')
    }
    const handleOnClick3 = () =>{
        alert('click 3')
    }
    const handleOnClick4 = () =>{
        alert('click 4')
    }
    return(        
            <nav>     
                <section>
                    <Button colorText='grey' text='Nosotros' handleOnClick={handleOnClick} />
                    <Button colorText='grey' text='Productos' handleOnClick={handleOnClick2} />
                    <Button colorText='grey' text='Contacto' handleOnClick={handleOnClick3} />
                    <Button colorText='grey' text='Preguntas Frecuentes' handleOnClick={handleOnClick4} />
                    <CartWidget />
                </section>
            </nav>        
    )
}

export default Navbar;