
<template>
    <button class="button" @click="$emit('click')">
      <span><slot></slot></span>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  };
  </script>
  
  <style scoped>
  .button {
    display: inline-block;
    border-radius: 4px;
    border: none;
    background: #51AF98 ;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 13px;
    width: 8em;
    padding: 10px;
    transition: all 0.4s;
    cursor: pointer;
  }
  
  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }
  </style>
  