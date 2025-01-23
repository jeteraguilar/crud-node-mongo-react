import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../../services/productService';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductForm.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Carregar produto para editar
      // Aqui você pode fazer uma requisição para pegar o produto existente
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, description, price, image };

    if (id) {
      // Atualizar produto
      await updateProduct(id, product);
    } else {
      // Criar novo produto
      await createProduct(product);
    }

    navigate('/'); // Redirecionar para a página inicial após salvar
  };

  const handleBack = () => {
    navigate(-1); // Voltar para a página anterior
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1 className="form-title">{id ? 'Editar Produto' : 'Adicionar Produto'}</h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-input"
        required
      />
      <input
        type="text"
        placeholder="Imagem URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="form-input"
      />
      <div className="form-actions">
        <button type="submit" className="form-button">Salvar</button>
        <button type="button" className="back-button" onClick={handleBack}>Voltar</button>
      </div>
    </form>
  );
};

export default ProductForm;
