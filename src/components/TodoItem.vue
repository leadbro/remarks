<template>
  <figure>
    <header>{{ text }}</header>
    <form action="">
      <TodoTask
        v-for="task in tasks"
        :key="task.id"
        :text="task.text"
        :is-done="task.isDone"
      />
    </form>
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
    }
  }
};
</script>
