import React,{useState} from 'react'
const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    return(
        <>
        <p className='titulos'>ItemListContainer</p>
        <h2>ItemListContainer</h2>
            <button>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount