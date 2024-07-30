<template>
  <div>
  
    <MenuUp/>

  </div>
</template>

<script>

import MenuUp from "@/components/MenuUp.vue";

export default {
  components: {
 
    MenuUp
  },
  data() {
    return {
      showLoader: true
    };
  },

};
</script>

<style scoped>

</style>
