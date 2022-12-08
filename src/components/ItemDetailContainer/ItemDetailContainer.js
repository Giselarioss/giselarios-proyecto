import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})

    const { productId } = useParams()
    useEffect(() => {
        getProductById(productId)
        .then ( response =>{
            setProducts(response)
        })
        .catch( error => {
            console.log(error)
        })

    }, [productId])




    return (
        <div>
            <h2>Detalle del producto</h2>
            <div>
                <h2>{product.title}</h2>
                <img src= {product.img} alt={product.title}/>
                <p>{product.text}</p>
                <h3>$ {product.price}</h3>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetailContainer