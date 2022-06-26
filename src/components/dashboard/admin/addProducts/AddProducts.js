import React, { useState } from 'react';
import './addproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';


const AddProducts = () => {



    const [image, setImage] = useState(null);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [discripation, setDiscripation] = useState("")





    // file upload




    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image)
        {
            return;
        }
        const fromData = new FormData()
        fromData.append("productName", productName);
        fromData.append("price", price);
        fromData.append("discripation", discripation);
        fromData.append("image", image);


        fetch("http://localhost:5000/addProducts", {

            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId)
                {
                    swal("Good job!", "Product is Added!", "success");

                }
            })
            .catch(error => {
                console.error("error", error)
            })



    };

    return (
        <div className="container">
            <form className="" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col addproducts">
                        <label htmlFor="product" className="fw-bold">Product</label>
                        <input type="text" onChange={e => setProductName(e.target.value)} id="product" name="name" placeholder="Enter Product Name" />


                        <label htmlFor="Discripation" className="fw-bold">Discripation</label>
                        <textarea onChange={e => setDiscripation(e.target.value)} id="Discripation" class="form-control" placeholder='Discripation' rows="3"></textarea>
                    </div>
                    <div className="col addproducts">
                        <label htmlFor="price" className="fw-bold">Price</label>
                        <input onChange={e => setPrice(e.target.value)} type="text" name="price" id="price" placeholder="Enter Product  Price" />


                        <label id="upload" htmlFor="fileUplode" className="fw-bold"> <FontAwesomeIcon icon={faFolderOpen} /> Upload File</label>
                        <input onChange={e => setImage(e.target.files[0])} type="file" name="file" id="fileUplode" />


                    </div>

                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className='btn btn-danger ' >Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;