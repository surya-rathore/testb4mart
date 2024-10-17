import React, { useState, useEffect } from 'react';
import "../../Css/OrderList.css"
const Orders = () => {
  const [orders, setOrders] = useState([
    {
      Id:"12345",
name:"manish mandlekar",
address:"08 tulsi parisar 2",
Date:"12/2/2024",
Price:"445",
Status:"succeed",
    },
    {
      Id:"12345",
name:"manish mandlekar",
address:"08 tulsi parisar 2",
Date:"12/2/2024",
Price:"445",
Status:"succeed",
    },
  ]);





  return (
    <div className="order-list-container">
      <h2 className="order-list-title">Order Management</h2>
      <table className="order-list-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.Id}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.Date}</td>
              <td>${order.Price}</td>
              <td>
                {order.Status}
              </td>
              <td>
                <select
                 
                  className="status-select"
                >
                  <option value="pending">Pending</option>
                  <option value="succeeded">Succeeded</option>
                  <option value="failed">Failed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {/* Pagination buttons or logic goes here */}
        Showing 6-12 of {orders.length}
      </div>
    </div>
  );
};


export default Orders;
