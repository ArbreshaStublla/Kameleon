
<template>
    <v-container class="centered-container" fluid>
      <v-row class="justify-center">
        <v-col cols="12" md="8" class="text-center">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "CenteredContainer",
  }
  </script>
  
  <style scoped>
  .centered-container {
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10vh; 
  }
  
  .centered-container h1, .centered-container p {
    margin: 0;
  }
  </style>
  