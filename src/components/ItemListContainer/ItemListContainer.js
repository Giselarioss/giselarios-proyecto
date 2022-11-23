import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return <section className='container'>
                <h1>{greeting}</h1>
            </section>
}

export default ItemListContainer