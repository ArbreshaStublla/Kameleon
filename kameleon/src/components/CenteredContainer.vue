<template>
  <v-container class="centered-container" fluid>
    <LoaderComponent v-if="showLoader"/>
    <v-row class="justify-center" v-show="!showLoader">
      <v-col cols="12" md="10" class="text-center">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoaderComponent from '@/components/LoaderComponent.vue';

export default {
  components: {
    LoaderComponent
  },
  data() {
    return {
      showLoader: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 800); 
  }
};
</script>

<style scoped>
.centered-container {

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh; 
}

.centered-container h1,
.centered-container p {
  margin: 0;
}
</style>
