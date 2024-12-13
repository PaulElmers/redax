import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../store/slices/adminSlice';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.admin.products);

    const handleAddProduct = () => {
        const name = prompt('Enter product name:');
        dispatch(addProduct({ name }));
    };

    const handleRemoveProduct = (name) => {
        dispatch(removeProduct(name));
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={handleAddProduct}>Add Product</button>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name}
                        <button onClick={() => handleRemoveProduct(product.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
