<template>
   
      <MenuUp/>
      <router-view></router-view>
    
</template>

<script>
import MenuUp from "../components/MenuUp.vue"

export default {
  components: {
    MenuUp
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style scoped>

</style>
