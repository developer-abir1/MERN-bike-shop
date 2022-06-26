import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
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
        <section   >
            <h4>Product quantity  : {proudcts.length}</h4>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discripation</th>
                        <th scope="col">img</th>
                        <th scope="col">Action</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                {proudcts.map((pd, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{pd.name}</td>
                            <td>{pd.price}</td>
                            <td>
                                {pd.discripation}
                            </td>
                            <td>
                                <img width='30px' src={`data:image/png;base64,${pd.image}`} alt="" />

                            </td>
                            <td>
                                <button className='btn btn-info text-white'>Update</button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>Delete</button>

                            </td>

                        </tr>

                    </tbody>

                )

                )}
            </table>
        </section>
    );
};

export default ManageProducts;