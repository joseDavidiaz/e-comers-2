import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const mockProductos = [{
        title : 'Playera',
        id: 1,
        talle: 'XL',
        price: 1500,
        image: 'remera3.jpeg',
        stock: 3
    },
    {
        title : 'Pantalón',
        id: 2,
        talle: 'L',
        price: 3500,
        image: 'jean1.jpg',
        stock: 6  
    },
    {
        title : 'Camisa',
        id: 3,
        talle: 'L',
        price: 1200,
        image: 'musculosa1.jpeg',
        stock: 6  
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ListProducts;