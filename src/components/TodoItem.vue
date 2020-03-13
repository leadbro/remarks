<template>
  <figure class="todo-item">
    <header class="todo-item__title">{{ text }}</header>
    <ul class="todo-item__tasks">
      <TodoTask
        v-for="task in tasks"
        :key="task.id"
        :text="task.text"
        :is-done="task.isDone"
      />
    </ul>
    <footer>
      <button>Save</button>
      <button>Cancel</button>
      <button>Del</button>
      <button>undo</button>
      <button>redo</button>
    </footer>
  </figure>
</template>

<script>
import TodoTask from "./TodoTask.vue";
export default {
  components: {
    TodoTask
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    tasks: { type: Array, default: () => [] }
  }
};
</script>

<style scoped>
.todo-item {
  /*border: 1px solid #000;*/
  padding: 0.5rem;

  &__title {
    text-align: center;
    font-weight: 500px;
    font-size: 1.5rem;

    margin-bottom: 0.5rem;
  }

  &__tasks {
    margin-bottom: 1rem;
    padding-left: 0;
  }
}
</style>
