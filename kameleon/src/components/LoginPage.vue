<template>
  <div class="wrapper">
    <div class="login-box">
      <img src="@/assets/kameleon.png" class="login-logo" alt="Logo">
      <form @submit.prevent="handleSubmit">
        <h2>Kyçu</h2>

        <div class="input-box">
          <span class="icon">
            <ion-icon name="mail"></ion-icon>
          </span>
          <input type="email" v-model="email" required @focus="handleFocus" @blur="handleBlur">
          <label :class="{ active: email !== '' }">Email</label>
        </div>

        <div class="input-box">
          <span class="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" v-model="password" required @focus="handleFocus" @blur="handleBlur">
          <label :class="{ active: password !== '' }">Fjalëkalimi</label>
        </div>

        <div class="remember-forgot">
          <label><input type="checkbox" v-model="rememberMe">Mbaj mend</label>
          <a href="#">Ke harruar fjalëkalimin?</a>
        </div>

        <button v-on:click="login">Kyçu</button>

        <div class="register-link">
          <p>Nuk keni një llogari? 
            <router-link to="/sign-up">Regjistrohu</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem('user-info', JSON.stringify(result.data[0]));
          this.$router.push({ name: 'home' });
        } else {
          console.warn('Login failed: Invalid email or password');
        }
      } catch (error) {
        console.error('Error during login', error);
      }
    },
    handleFocus(event) {
      event.target.parentNode.querySelector('label').classList.add('active');
    },
    handleBlur(event) {
      if (event.target.value === '') {
        event.target.parentNode.querySelector('label').classList.remove('active');
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) { 
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display:flex;
  justify-content:center;
  align-items: center;
  height:100vh;
  width:100%;
  background:url('http://codingstella.com/wp-content/uploads/2024/01/download-5.jpeg') no-repeat;
  background-size:cover;
  background-position:center;
  animation:animateBg 5s linear infinite;
}
@keyframes animateBg {
  100% {
    filter:hue-rotate(360deg);
  }
}
.login-box {
  position: relative;
  width: 400px;
  height: 450px;
  background: transparent;
  border-radius: 15px;
  border: 2px solid rgba(255,255,255,.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}
.login-logo {
  position: absolute;
  top: -50px; 
  width: 100px; 
  height: auto;
}
h2 {
  font-size:2em;
  color:#fff;
  text-align:center;
}
.input-box {
  position:relative;
  width:310px;
  margin:30px 0;
  border-bottom:1px solid #fff;
}
.input-box label {
  position:absolute;
  top:50%;
  left:5px;
  transform:translateY(-50%);
  font-size:1em;
  color:#fff;
  pointer-events:none;
  transition:.5s;
}
.input-box input {
  width:100%;
  height:50px;
  background:transparent;
  border:none;
  outline:none;
  font-size:1em;
  color:#fff;
  padding:0 35px 0 5px;
}
.input-box .icon {
  position:absolute;
  right:8px;
  top:50%;
  color: #fff;
  transform: translateY(-50%);
}
.remember-forgot {
  margin:-15px 0 15px;
  font-size:.9em;
  color:#fff;
  display:flex;
  justify-content:space-between;
}
.remember-forgot label input {
  margin-right:3px;
}
.remember-forgot a {
  color:#fff;
  text-decoration:none;
}
.remember-forgot a:hover {
  text-decoration:underline;
}
button {
  width:100%;
  height:40px;
  background-color:#fff;
  border:none;
  border-radius:40px;
  cursor:pointer;
  font-size:1em;
  color:#000;
  font-weight: 500;
}
.register-link {
  font-size:.9em;
  color:#fff;
  text-align:center;
  margin:25px 0 10px;
}
.register-link p a {
  color:#fff;
  text-decoration:none;
  font-weight:600;
}
.register-link p a:hover {
  text-decoration:underline;
}
@media (max-width:500px) {
  .login-box {
    width:100%;
    height:100vh;
    border:none;
    border-radius:0;
  }
  .input-box {
    width:290px;
  }
  .login-logo {
    top: -30px; 
    width: 80px; 
  }
}
.input-box label.active {
  top: -5px;
}
</style>
