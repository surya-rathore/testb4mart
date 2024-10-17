import React from 'react';
import "../../Css/Dashboard.css"
const Dashboard = () => {
  const data = [
    { id: 1, name: "John Doe", date: "2024-10-05", total: "$100", status: "Paid", method: "Credit Card" },
    { id: 2, name: "Jane Smith", date: "2024-10-03", total: "$250", status: "Pending", method: "PayPal" },
    { id: 3, name: "Mark Green", date: "2024-10-01", total: "$320", status: "Paid", method: "Bank Transfer" },
    // Add more rows as needed
  ];
  return (
    <div className='dash'>
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.total}</td>
              <td>{item.status}</td>
              <td>{item.method}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Dashboard;
