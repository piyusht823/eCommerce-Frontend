<template>
    <div class="product-add">
      <h2>Add New Product</h2>
      <form @submit.prevent="addProduct">
        <div class="form-group">
          <label for="name">Name : </label>
          <input type="text" id="name" v-model="newProduct.name" required />
        </div><br>
        <div class="form-group">
          <label for="description">Description : </label>
          <textarea id="description" v-model="newProduct.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price : </label>
          <input type="number" id="price" v-model="newProduct.price" required />
        </div>
        <div class="form-group">
          <label for="available">Available : </label>
          <input type="checkbox" id="available" v-model="newProduct.available" />
        </div><br>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: 0,
          available: false,
        },
      };
    },
    methods: {
      addProduct() {
        axios.post('http://localhost:8080/products/add', this.newProduct)
          .then(response => {
            console.log('Product added:', response.data);
            alert("Product Added")
            this.newProduct = {
              name: '',
              description: '',
              price: 0,
              available: false,
            };
          })
          .catch(error => {
            console.error('Error adding product:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-add {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea,
  input[type="number"] {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical; /* Allow the textarea to be vertically resizable */
  }
  
  input[type="checkbox"] {
    margin-top: 5px;
  }
  
  button[type="submit"] {
    width: 30%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  /* Add more custom styles here */
  
  </style>
  
  