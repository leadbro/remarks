<template>
  <section>
    <TodoItem v-for="item in items" :key="item.id" :text="item.text" />
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
