<style>
  .vue_container {
  border: 1px solid #03a9f4;
  margin: 8px 0px;
  padding: 20px;
  border-radius: 8px;
  background-color: #e1f5fe;
}

.vue_container h1 {
  color: #0288d1;
}

.vue_container button {
  background-color: #03a9f4;
  padding: 5px;
  border-radius: 3px;
  border: none;
}
</style>

<template>
  <div class="vue_container">
    <h1>Hello from Vue</h1>
    <button @click="showToast">Show Toast</button>
  </div>
</template>

<script>
export default {
  methods: {
    showToast() {
      window.showToast("Vue says hello!", "vue");
    }
  }
};
</script>
