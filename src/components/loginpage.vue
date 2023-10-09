<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login" >
        <div class="form-group">
          <label for="username">Username: </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <br>
        <div class="form-group">
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div><br>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
        async login() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        const response = await axios.post('http://localhost:8080/users/authenticate', userData);

        if (response.data) {
          this.$router.push('/product');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    /* border: 1px solid #ccc; */
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
  input[type="password"] {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    width: 30%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  
  </style>
  
  

