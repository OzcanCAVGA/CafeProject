import React, { useState } from 'react'

export const Product = ({product:{name,id,description,price,details:{images},category}}) => {
    console.log("geldim"+images[0]);

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity => quantity + 1)
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1)
        }
    }

    return (
        <>
            <h2 className='text-5xl'>{name}</h2>
            <h6 className='text-base italic text-gray-400 mt-3'>{category}</h6>
            <img className='rounded-xl my-5 ' src={images[0]} alt="" />
            <p className='shadow-sm'> {description}</p>
            <div className='flex items-center  pt-5'>
                <h3 className=' text-4xl'>{price}₺</h3>
                <div className="flex items-center px-5">

                    <button className='bg-[#46731A] p-2 rounded-s-full text-white text-xl' onClick={decrementQuantity}>-</button>
                    <span className="px-5 text-xl ">{quantity}</span>
                    <button className='bg-[#46731A]  text-white p-2 rounded-e-full text-xl' onClick={incrementQuantity}>+</button>
                </div>
            </div>
        </>
    )
}