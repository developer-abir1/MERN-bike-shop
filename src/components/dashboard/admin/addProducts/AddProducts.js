import React from 'react';

const AddProducts = ({ title }) => {
    return (
        <section className="h-100 dashboardItems"   >
            <h2 className="px-4 py-2 bg-white">{title}</h2>
        </section>
    );
};

export default AddProducts;