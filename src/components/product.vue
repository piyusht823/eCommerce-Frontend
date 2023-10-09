

 <template>
    <div class="product">
      <h2>Product List</h2>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-item">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
      <div class="cart">
        <h3>Shopping Cart</h3>
        <div v-for="(cartItem, index) in cart" :key="cartItem.product.id" class="cart-item">
          <span>{{ cartItem.product.name }}</span>
          <span>Quantity: {{ cartItem.quantity }}</span>
          <span>Subtotal: ${{ cartItem.subtotal }}</span>
          <button @click="removeFromCart(index)">Remove</button> 
        </div>
        <div class="total">
          <span>Total: ${{ getTotalPrice() }}</span>
          <button @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        cart: [],
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
            console.error(error);
          });
      },
      addToCart(product) {
        const cartItem = this.cart.find(item => item.product.id === product.id);
  
        if (cartItem) {
          cartItem.quantity++;
        } else {
          this.cart.push({ product: product, quantity: 1 });
        }
      },
      removeFromCart(index) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity--;
        } else {
          this.cart.splice(index, 1); 
        }
      },
      getTotalPrice() {
        return this.cart.reduce((total, cartItem) => {
          return total + cartItem.product.price * cartItem.quantity;
        }, 0);
      },
      checkout() {
        alert(`Checkout Total: $${this.getTotalPrice()}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .product {
    /* display: flex; */
    justify-content: space-between;
  }
  
  .product-list {
    /* width: 60%; */
    display: flex;
  }
  
  .product-item {
    border: 2px solid #4b4a4a;
    padding: 10px;
    border: 2px solid #4b4a4a;

    margin-bottom: 10px;
    margin: 4px;
  }
  
  .cart {
    width: 30%;
    border-radius: 4px;
    padding: 10px;
    margin: 4px;
  }
  
  .cart-item {
    padding: 5px;
    margin-bottom: 5px;
    margin: 4px;
  }
  
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  </style>
  