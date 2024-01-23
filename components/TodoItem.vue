<script setup lang="ts">
import { defineProps } from "vue";
import { todoItemApi } from './data';

const { todoId } = defineProps<
  { todoId: number; }>();

const { data: content } = useAsyncData(
  () => todoItemApi(todoId),
  { server: false }
);

</script>

<template>
  <div class="title">
    {{ content }}
  </div>
</template> 