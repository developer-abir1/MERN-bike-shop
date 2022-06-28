import './castomerReview.css'


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';

const CastomerReview = () => {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discripation, setDiscripation] = useState("")
    const [rating, setRating] = useState(0)


    console.log(rating)


    // file upload




    const handleSubmit = (e) => {
        e.preventDefault();

        const fromData = new FormData()
        fromData.append("productName", name);
        fromData.append("price", price);
        fromData.append("discripation", discripation);



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
        <div className="container" >
            <form className="" onSubmit={handleSubmit}>

                <div className="row  ">
                    <div className="col addproducts">
                        <label htmlFor="product" className="fw-bold">Enter Name </label>
                        <input type="text" onChange={e => setName(e.target.value)} id="product" name="name" placeholder="Enter Your Name" />


                        <label htmlFor="Discripation" className="fw-bold">Discripation</label>
                        <textarea onChange={e => setDiscripation(e.target.value)} id="Discripation" class="form-control" placeholder='Discripation' rows="3"></textarea>
                    </div>
                    <div className="col addproducts">
                        <label htmlFor="price" className="fw-bold">Company name</label>
                        <input onChange={e => setPrice(e.target.value)} type="text" name="company" placeholder="Enter Company Name" />
                        <label htmlFor="price" className="fw-bold">Rating</label>
                        <select onChange={e => setRating(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected>Please select rating</option>
                            <option value="1">1</option>
                            <option value="2">0</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>



                    </div>

                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className='btn btn-info ' >send</button>
                </div>
            </form>
        </div>
    );
};

export default CastomerReview;