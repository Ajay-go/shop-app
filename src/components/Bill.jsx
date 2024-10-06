import React from 'react';

const Bill = ({ items }) => {
    const grandTotal = items.reduce((acc, item) => acc + item.quantity * item.pricePerKg, 0);

    return (
        <div className="bill-container">
            <h2>Bill</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity (kg)</th>
                        <th>Price per kg (₹)</th>
                        <th>Total (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.pricePerKg}</td>
                            <td>₹{(item.quantity * item.pricePerKg).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Bill;
