<template>
  <ul>
    <li v-for="todoId in 5" :key="todoId" class="title">
      {{ todoId }}
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