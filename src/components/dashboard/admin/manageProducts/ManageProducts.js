import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [proudcts, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])
    return (
        <section   >
            <h4>Product quantity  : {proudcts.length}</h4>
        </section>
    );
};

export default ManageProducts;