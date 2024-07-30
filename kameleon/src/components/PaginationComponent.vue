<template>
  <div class="custom-pagination">
    <button 
      v-for="page in pages" 
      :key="page" 
      @click="changePage(page)" 
      :class="['pagination-button', { active: page === currentPage }]">
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      return Array.from({ length: this.totalPages }, (v, k) => k + 1);
    }
  },
  methods: {
    changePage(page) {
      this.$emit('page-change', page);
    }
  }
}
</script>

<style scoped>
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; 
}

.pagination-button {
  margin: 0 5px;
  color: #fff;
  background-color: transparent; 
  border: none; 
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; 
  border: 1px solid #fff;
}

.pagination-button.active {
  background-color: #fff; 
  color: #000; 
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
