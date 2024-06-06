<template>
    <div class="containerr">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="col-lg-12 text-404">
          <b>404</b>
        </div>
        <div class="col-lg-12 text">
          <b>PAGE NOT FOUND</b>
        </div>
        <div class="col-lg-12 text-btn">
          <router-link to="/">
            <button name="login" class="btn btn-outline-primary">BACK TO HOME</button>
          </router-link>
        </div>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </template>

<script>
export default {

}
</script>

<style scoped>
.containerr{
    background-color: #061E2C;
    height: 100vh;
}

.text-404 {
    padding-top: 80px;
    font-size: 200px;
    line-height: 200px;
    text-align: center;
    letter-spacing: 5px;
    background: -webkit-linear-gradient(#33A186, #3980C0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.text {
    text-align: center;
    font-size: 20px;
    color: #f6f6e3;
    letter-spacing: 5px;
    margin-top: 0px;
}

.text-btn {
    text-align: center;
    margin-top: 75px;
}

.btn-outline-primary {
    border-color:#33A186;
    color: #33A186;
    border-radius: 0px;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
    background-color:#33A186;
    right: 0px;
    border-color:#33A186;
    color: #141829;
}

@media screen and (max-width:500px) {
    .text-404 {
        font-size: 150px;
    }
}

@media screen and (max-width:345px) {
    .text-404 {
        font-size: 120px;
    }
}
</style>