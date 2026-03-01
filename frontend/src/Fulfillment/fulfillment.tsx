import React from 'react';
import data from './data';

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Fulfillment</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>CUSTOMER</th>
              <th>ITEM</th>
              <th>STATUS</th>
              <th>SHIPPED AT</th>
            </tr>
          </thead>
          <tbody>
            {data.fulfillment.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.customer}</td>
                <td>{item.item}</td>
                {/* Unshipped orders show in red using the 'active' class */}
                <td className={!item.isShipped ? 'active' : ''}>
                    {item.isShipped ? 'Shipped' : 'Unshipped'}
                </td>
                <td>{item.shippedAt || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;