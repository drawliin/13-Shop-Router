import React from 'react'
import {useParams} from 'react-router-dom';
import './Style.css'

export const LaptopDetails = ({laptops}) => {

    const {id} = useParams();
    const laptop = laptops.find(laptop => laptop.id === parseInt(id));

    if (!laptop){
        return (<div>Laptop Not Found</div>)
    }

    return (
        <div className='laptopDetails'>
            <h1>{laptop.title}</h1>
            <img src={laptop.image}/>
            <p>{laptop.price}</p>
        </div>
    )
}
