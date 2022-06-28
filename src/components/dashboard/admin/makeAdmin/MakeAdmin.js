import React from 'react';

const MakeAdmin = () => {
    return (
        <section className="d-flex  justify-content-center">
            <input type="email " className="form-control w-50" placeholder="Enter Admin Email" name="email" />
            <button className="btn btn-success">Add Admin</button>
        </section>
    );
};

export default MakeAdmin;