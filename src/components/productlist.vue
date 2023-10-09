<template>
    <div class="product-list">
      <h2>Product List</h2>
      <ol style="display: flex;">
        <li v-for="product in products" :key="product.id" style="margin: 15px;">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios.get('http://localhost:8080/products/getall')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  