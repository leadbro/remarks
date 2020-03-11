<template>
  <section>
    <TodoItem v-for="item in items" :key="item.id" />
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
  methods: {},
  data() {},
  computed: {
    ...mapGetters(["list"])
  }
};
</script>
