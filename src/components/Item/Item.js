import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div>
            <img src={product.img} alt={product.title} style={{ width: 230 }}/>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>$ {product.price}</p>
            <Link to={`/detail/${product.id}`}>... Mas informacion</Link>
        </div>
    )
}

export default Item