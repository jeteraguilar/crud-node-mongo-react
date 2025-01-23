// src/services/productService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Função para pegar todos os produtos
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Função para adicionar um novo produto
export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

// Função para editar um produto existente
export const updateProduct = async (productId, updatedProduct) => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

// Função para deletar um produto
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/products/${productId}`);
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
};
