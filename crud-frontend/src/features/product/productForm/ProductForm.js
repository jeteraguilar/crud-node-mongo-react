import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct, getProductById  } from '../../../services/productService';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './ProductForm.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await getProductById(id);
        if (product) {
          setName(product.name);
          setDescription(product.description);
          setPrice(
            product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );
          setImage(product.image);
        } else {
          navigate('/'); // Caso o produto não seja encontrado, redireciona para a lista
        }
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { 
      name, 
      description, 
      price: parseFloat(price.replace(/[R$.\s]/g, "").replace(",", ".")), 
      image 
    };

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
        type="text"
        placeholder="Preço"
        value={price}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
          const formattedValue = (value / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          setPrice(formattedValue);
        }}
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
  <button type="submit" className="form-button">
    <FontAwesomeIcon icon={faSave} className="icon" />
    Salvar
  </button>
  <button type="button" className="back-button" onClick={handleBack}>
    <FontAwesomeIcon icon={faArrowLeft} className="icon" />
    Voltar
  </button>
</div>
    </form>
  );
};

export default ProductForm;
