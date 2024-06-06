<template>
  <div>
    <LoaderComponent v-if="showLoader"/>
    <MenuUp/>
    <router-view v-show="!showLoader"></router-view>
  </div>
</template>

<script>
import LoaderComponent from "../components/LoaderComponent.vue";
import MenuUp from "@/components/MenuUp.vue";

export default {
  components: {
    LoaderComponent,
    MenuUp
  },
  data() {
    return {
      showLoader: true
    };
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
 
    setTimeout(() => {
      this.showLoader = false;
    }, 1500); 
  }
};
</script>

<style scoped>

</style>
