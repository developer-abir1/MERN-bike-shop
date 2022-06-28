import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ pd }) => {
    const { name, _id, discripation, image, price } = pd;



    console.log(pd)
    return (


        <div class="col py-4">
            <div class="card py-2 px-2">
                <Link to={`/products/${_id}`} className="  text-decoration-none  text-black">
                    <div className="d-flex justify-content-center bg-gary">
                        <img src={`data:image/png;base64,${image}`} class="card-img-top  " style={{ height: "200px" }} alt="..." />

                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>

                        <p class="card-text">{discripation}</p>


                    </div>
                </Link>
                <div className="d-flex justify-content-between ">
                    <span>${price}</span>
                    <button className="btn  btn-warning">Add To card</button>
                </div>
            </div>
        </div >


    );
};

export default ProductItem;