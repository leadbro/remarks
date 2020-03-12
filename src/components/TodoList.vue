<template>
  <section class="todo-list">
    <TodoItem
      v-for="item in items"
      :key="item.id"
      class="todo-list__item"
      :text="item.text"
      :tasks="item.tasks"
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["getList"]),
    items() {
      return this.getList;
    }
  }
};
</script>

<style scoped>
.todo-list {
  display: flex;

  &__item {
    width: calc(100% / 3);
  }
}
</style>
