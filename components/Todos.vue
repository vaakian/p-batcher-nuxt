<script setup lang="ts">
const count = ref(5);
</script>
<template>
  <button @click="count += 3">count: {{ count }}</button>
  <ul>
    <li v-for="todoId in count" :key="todoId" class="title">
      <!-- we got a for loop, by there's only one todoItem request that fetches all the data -->
      <TodoItem :todoId="todoId" />
    </li>
  </ul>
</template>

<style scoped>
.title {
  color: #2c3e50;
}
</style>