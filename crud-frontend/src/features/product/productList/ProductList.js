import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../../../services/productService';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Produtos</h1>
      <Link to="/add" className="add-product-link">
        <FontAwesomeIcon icon={faPlus} /> Adicionar Produto
      </Link>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <div className="product-details">
              <strong>{product.name}</strong>  - {product.description} - <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</strong>             
            </div>
            <div className="product-actions">
              <FontAwesomeIcon
                icon={faTrash}
                className="icon delete-icon"
                onClick={() => handleDelete(product)}
              />
              <Link to={`/edit/${product._id}`}className="edit-link">
                <FontAwesomeIcon icon={faEdit} className="icon edit-icon"/>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;