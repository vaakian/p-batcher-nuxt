<template>
  <ul>
    <li v-for="todoId in 5" :key="todoId" class="title">
      {{ todoId }}
      <TodoItem :todoId="todoId" />
    </li>
  </ul>
</template>

<style scoped>
.title {
  color: #2c3e50;
}
</style>