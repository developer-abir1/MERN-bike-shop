import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../layout/Layout';

const ProductDiteles = () => {

    const { id } = useParams()

    const [proudcts, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])
    const product = proudcts.find(pd => pd._id === id)





    if (proudcts.length === 0)
    {
        return <div class="spinner-border text-primary d-flex justify-content-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }


    return (
        <Layout>
            <div style={{ height: "1000px" }}>
                <h1>This is a product Diteles {id}</h1>
                <div>
                    <div className="row ">
                        <div className="col-md-6 p-0">
                            <img style={{ width: "100%", height: "900px" }} src={`data:image/png;base64,${product?.image}`} alt="" />
                        </div>
                        <div className="col-md-4">
                            <h4>Name:{product?.name}</h4>


                            <h5>Discripation: {product?.discripation}</h5>

                        </div>
                        <div className="col-md-2">
                            <div className="card  px-2 py-2"  >

                                <h6>Price: ${product?.price}</h6>
                                <button className="btn btn-warning">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDiteles;