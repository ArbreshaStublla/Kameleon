<template>
  <div class="loading-overlay">
    <img src="../assets/kameleon.png" alt="Logo" style="width: 200px;" class="logo">
    <div class="spinner">
    <div class="spinner1"></div>
</div>
  </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
.loading-overlay {
    align-items: center;
    background-color: #061E2C; 
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 99999999999999999999999999 !important;
  }

.spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
  margin-top: 50px;
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
</style>