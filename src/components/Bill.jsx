import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Bill = () => {
    const location = useLocation();
    const { items = [], grandTotal = 0 } = location.state || {}; // Default to empty array and zero

    return (
        <div>
            <h1>Bill Details</h1>
            {items.length === 0 ? (
                <p>No items in the bill.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity (kg)</th>
                            <th>Rate (₹ per kg)</th>
                            <th>Total Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.pricePerKg}</td>
                                <td>{item.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <h2>Grand Total: ₹{grandTotal.toFixed(2)}</h2>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Bill;
