import React from 'react';
import Product from '../Product/product';
import "./productlist.css"

import { products } from '../../data';


const Productlist = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title"> Create & Inspire</h1>
                <p className="pl-desc">
                    Iskustvo neko
                </p>
            </div>
            <div className="pl-list">
                {products.map((product) => (
                    <Product key={product.id} img={product.img} link={product.link} />


                ))}
            </div>
        </div>
    );
}

export default Productlist;
