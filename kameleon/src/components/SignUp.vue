<template>
  <div class="wrapper">
    <div class="signup-box">
      <img src="../assets/kameleon.png" class="signup-logo" alt="Logo">
      <form @submit.prevent="handleSignUp">
        <h2>Regjistrohu</h2>

        <div class="input-box">
          <span class="icon">
            <ion-icon name="person"></ion-icon>
          </span>
          <input type="text" v-model="name" required @focus="onFocus($event, 'name')" @blur="onBlur($event, 'name')">
          <label :class="{ 'active': name !== '' }">Emri</label>
        </div>

        <div class="input-box">
          <span class="icon">
            <ion-icon name="mail"></ion-icon>
          </span>
          <input type="email" v-model="email" required @focus="onFocus($event, 'email')" @blur="onBlur($event, 'email')">
          <label :class="{ 'active': email !== '' }">Email</label>
        </div>

        <div class="input-box">
          <span class="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" v-model="password" required @focus="onFocus($event, 'password')" @blur="onBlur($event, 'password')">
          <label :class="{ 'active': password !== '' }">Fjalëkalimi</label>
        </div>

        <button v-on:click="signUp">Regjistrohu</button>
        <p class="loginn">
          <router-link to="/login"><span>Kyçu</span></router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      try {
        let result = await axios.post("http://localhost:3000/user", {
          email: this.email,
          password: this.password,
          name: this.name
        });
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    },
    onFocus(event, field) {
      if (this[field] === '') {
        event.target.nextElementSibling.classList.add('active');
      }
    },
    onBlur(event, field) {
      if (this[field] === '') {
        event.target.nextElementSibling.classList.remove('active');
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
.signup-box {
  position: relative;
  width: 400px;
  height: 500px;
  background: transparent;
  border-radius: 15px;
  border: 2px solid rgba(255,255,255,.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}
.signup-logo {
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
  margin:20px 0;
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
.input-box input:focus ~ label,
.input-box input:valid ~ label,
.input-box label.active {
  top:-5px;
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
.loginn{
  font-size: 22px;
}
.loginn span {
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width:500px) {
  .signup-box {
    width:100%;
    height:100vh;
    border:none;
    border-radius:0;
  }
  .input-box {
    width:290px;
  }
  .signup-logo {
    top: -30px; 
    width: 80px; 
  }
}
</style>
