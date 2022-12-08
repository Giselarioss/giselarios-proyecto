import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



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
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer