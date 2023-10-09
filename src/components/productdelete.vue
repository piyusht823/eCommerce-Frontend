<template>
    <div class="product-delete">
      <h2>Delete Product</h2>
      <form @submit.prevent="deleteProduct">
        <div class="form-group">
          <label for="productId">Product ID:</label>
          <input type="number" id="productId" v-model="productId" required />
        </div><br>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productId: null,
      };
    },
    methods: {
      deleteProduct() {
        if (this.productId) {
          axios.delete(`http://localhost:8080/products/delete/${this.productId}`)
            .then(response => {
              console.log('Product deleted:', response.data);
              alert("Product deleted")
              this.productId = null;
            })
            .catch(error => {
              console.error('Error deleting product:', error);
            });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .product-delete {
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
  
  input[type="number"] {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button[type="submit"] {
    width: 30%;
    padding: 10px;
    background-color: #ff0000; /* Red color for delete button */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #cc0000; /* Darker red color on hover */
  }
  
  /* Add more custom styles here */
  
  </style>
  