import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-start">{title}</h2>
                <div className="card-actions border w-full items-center flex justify-between">
                <p className='text-error font-bold'>Price : ${price}</p>
                    <Link to={`/cheakout/${_id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;