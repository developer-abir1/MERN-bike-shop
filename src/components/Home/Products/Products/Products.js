import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

const Products = () => {
    const [proudcts, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])

    if (proudcts.length === 0)
    {
        return <div class="spinner-border text-primary d-flex justify-content-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }



    return (
        <div className="container">
            <h4 className=" ">Our Products</h4>
            <div class="row row-cols-1 row-cols-md-2 row-cols-md-4  g-4">
                {
                    proudcts.map((pd, index) => <ProductItem key={pd._id} pd={pd} />)
                }
            </div>
        </div>
    );
};

export default Products;