import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ product }) => {

    const handleOnAdd = (quantity) => {
        console.log( 'Producto agregado al carrito' + quantity)
    }
    return (
        <div>
            <img src={product.img} alt={product.title} style={{ width: 230 }}/>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>$ {product.price}</p>
            <ItemCount stock ={product.stock} onAdd={handleOnAdd}/>
            <Link to={`/detail/${product.id}`}>... Mas informacion</Link>
        </div>
    )
}

export default Item