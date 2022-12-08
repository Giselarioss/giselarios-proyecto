import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ title, img, price, text, stock, id}) => {

    const handleOnAdd = (quantity) => {
        console.log( 'Producto agregado al carrito' + quantity)
    }


    return(
        <div>
                <h2>{title}</h2>
                <img src= {img} alt={title}/>
                <p>{text}</p>
                <h3>$ {price}</h3>
                <ItemCount stock ={stock} onAdd={handleOnAdd}/>
            </div>
    )
}

export default ItemDetail