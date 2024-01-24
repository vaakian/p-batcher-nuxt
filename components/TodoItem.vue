<script setup lang="ts">
import { defineProps } from "vue";
import { todoItemApi } from './data';

const { todoId } = defineProps<
  { todoId: number; }>();

// fetch a single todo item
const { data: content, pending } = useAsyncData(
  `${todoId}`,
  () => todoItemApi(todoId),
  // works both on client and server
  { server: true }
);

</script>

<template>
  <div class="title">
    <span>{{ todoId }}:</span>
    <code v-if="pending">loading...</code>
    <code v-else>{{ content }}</code>
  </div>
</template> 