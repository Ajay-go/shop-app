import React, { useState } from 'react';
import jsPDF from 'jspdf';
import Item from './components/Item'; // Ensure this path is correct
import './styles.css'; // Import your CSS file

const App = () => {
    const [items, setItems] = useState({
        'पीना जरफ़' :  { pricePerKg: 32, quantity: 0 },
        'दूध गंगा' :  { pricePerKg: 35, quantity: 0 },
        'जौ':  { pricePerKg: 27, quantity: 0 },
        'गेहूं दाना':  { pricePerKg: 27, quantity: 0 },
        'पोहा':  { pricePerKg: 25, quantity: 0 },
        'चना चूनी':  { pricePerKg: 32, quantity: 0 },
        'मसूर चूनी':  { pricePerKg: 24, quantity: 0 },
        'बिनोला':  { pricePerKg: 48, quantity: 0 },
        'अरहर':  { pricePerKg: 30, quantity: 0 },
    });

    const handleQuantityChange = (name, quantity) => {
        setItems(prevItems => ({
            ...prevItems,
            [name]: {
                ...prevItems[name],
                quantity: Math.max(0, quantity) // Prevent negative quantities
            }
        }));
    };

    const totalAmount = Object.keys(items).reduce((total, itemName) => {
        const item = items[itemName];
        return total + item.pricePerKg * item.quantity;
    }, 0);

    const generatePDF = () => {
      const doc = new jsPDF();
  
      // Title
      doc.setFontSize(20);
      doc.text('Jai Durge Flour Mill', 20, 20);
  
      // Set font for items
      doc.setFontSize(12);
      let yPosition = 30;
  
      Object.entries(items).forEach(([name, { quantity, pricePerKg }]) => {
          if (quantity > 0) {
              const totalPrice = (quantity * pricePerKg).toFixed(2);
              doc.text(`${name}: ${quantity} kg at ₹${pricePerKg} per kg = ₹${totalPrice}`, 20, yPosition);
              yPosition += 10; // Move down for next line
          }
      });
  
      // Add total amount
      doc.setFontSize(14); // Slightly larger for emphasis
      
      doc.text(`Total Amount: ₹${totalAmount.toFixed(2)}`, 20, yPosition + 10);
  
      // Add some footer or note if needed
      doc.setFontSize(10);
      doc.text('Thank you for your purchase!', 20, yPosition + 25);
  
      // Save the PDF
      doc.save('shopping_list.pdf');
  };
  

    const confirmGeneratePDF = () => {
        if (window.confirm("Do you want to generate the PDF of your shopping list?")) {
            generatePDF();
        }
    };

    return (
        <div className="container">
            <h1>Jai Durge Flour Mill</h1>
            {Object.keys(items).map(itemName => (
                <div className="item" key={itemName}>
                    <Item
                        name={itemName}
                        pricePerKg={items[itemName].pricePerKg}
                        onQuantityChange={handleQuantityChange}
                    />
                </div>
            ))}
            <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
            <h3>Item Summary:</h3>
            <ul>
                {Object.entries(items).map(([name, { quantity, pricePerKg }]) => (
                    quantity > 0 && (
                        <li key={name}>
                            {name}: {quantity} kg at ₹{pricePerKg} per kg = ₹{(quantity * pricePerKg).toFixed(2)}
                        </li>
                    )
                ))}
            </ul>
            <button onClick={confirmGeneratePDF}>Generate PDF</button>
        </div>
    );
};

export default App;
