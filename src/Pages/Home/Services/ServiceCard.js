import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className='flex justify-between'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <Link to={`checkout/${_id}`}>
                        <button className='text-orange-600 text-2xl' title='Checkout'><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;