import React, { useState } from 'react'
import "../../Css/AdminProduct.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
      name: '',
      category: '',
      description: '',
      price: '',
      quantity: '',
      quantityType: '',
      photo: '',
      discount: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setProducts([...products, { ...form, id: Date.now() }]);
      setForm({
          name: '',
          category: '',
          description: '',
          price: '',
          quantity: '',
          quantityType: '',
          photo: '',
          discount: ''
      });
  };

  return (
      <div className="productManagement">
          <h1 className="productManagement__title">Product Management</h1>
          <form className="productManagement__form" onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="productManagement__input"
              />
              <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="productManagement__input"
              />
              <textarea
                  name="description"
                  placeholder="Product Description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="productManagement__textarea"
              />
              <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  className="productManagement__input"
              />
              <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                  className="productManagement__input"
              />
              <select
                  name="quantityType"
                  value={form.quantityType}
                  onChange={handleChange}
                  required
                  className="productManagement__select"
              >
                  <option value="">Select Quantity Type</option>
                  <option value="pcs">Pcs</option>
                  <option value="kg">Kg</option>
                  <option value="liters">Liters</option>
              </select>
              <input
                  type="url"
                  name="photo"
                  placeholder="Product Photo URL"
                  value={form.photo}
                  onChange={handleChange}
                  required
                  className="productManagement__input"
              />
              <input
                  type="number"
                  name="discount"
                  placeholder="Discount (%)"
                  value={form.discount}
                  onChange={handleChange}
                  className="productManagement__input"
              />
              <button type="submit" className="productManagement__button">Add Product</button>
          </form>

          <h2 className="productManagement__listTitle">Product List</h2>
          <table className="productManagement__table">
              <thead>
                  <tr>
                      <th className="productManagement__tableHeader">Name</th>
                      <th className="productManagement__tableHeader">Category</th>
                      <th className="productManagement__tableHeader">Description</th>
                      <th className="productManagement__tableHeader">Price</th>
                      <th className="productManagement__tableHeader">Quantity</th>
                      <th className="productManagement__tableHeader">Quantity Type</th>
                      <th className="productManagement__tableHeader">Photo</th>
                      <th className="productManagement__tableHeader">Discount</th>
                  </tr>
              </thead>
              <tbody>
                  {products.map((product) => (
                      <tr key={product.id}>
                          <td className="productManagement__tableData">{product.name}</td>
                          <td className="productManagement__tableData">{product.category}</td>
                          <td className="productManagement__tableData">{product.description}</td>
                          <td className="productManagement__tableData">{product.price}</td>
                          <td className="productManagement__tableData">{product.quantity}</td>
                          <td className="productManagement__tableData">{product.quantityType}</td>
                          <td className="productManagement__tableData">
                              <img src={product.photo} alt={product.name} width="50" className="productManagement__image"/>
                          </td>
                          <td className="productManagement__tableData">{product.discount}%</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default Products