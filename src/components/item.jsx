import React from 'react';

const Item = ({ name, pricePerKg, onQuantityChange }) => {
    const handleChange = (e) => {
        const quantity = Number(e.target.value);
        onQuantityChange(name, quantity);
    };

    return (
        <div className="item-container">
            <span>{name}  </span>
            <span>₹{pricePerKg} per kg</span>
            <input
                type="number"
                min="0"
                placeholder="Quantity in kg"
                onChange={handleChange}
            />
        </div>
    );
};

export default Item;
