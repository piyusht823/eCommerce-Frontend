<template>
    <div class="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username : </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password : </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="form-group">
          <label for="fullName">Full Name : </label>
          <input
            type="text"
            id="fullName"
            v-model="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email : </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number : </label>
          <input
            type="tel"
            id="phoneNumber"
            v-model="phoneNumber"
            placeholder="Enter your phone number"
          />
        </div>
        <br><button type="submit">Register</button>
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
        fullName: '',
        email: '', 
        phoneNumber: '', 
      };
    },
    methods: {
      register() {
        const userData = {
          username: this.username,
          password: this.password,
          fullName: this.fullName,
          email: this.email, 
          phoneNumber: this.phoneNumber, 
        };
  
        axios.post('http://localhost:8080/users/add', userData)
          .then(response => {
            if (response.data) {

              console.log('Registration successful');
              this.$router.push('/loginpage');
              alert("Registration successful")
            } else {
              alert('Registration failed. Please try again.');
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .signup {
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
  input[type="password"],
  input[type="email"],
  input[type="tel"] {
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
    font-size: 16px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  
  </style>
  
  