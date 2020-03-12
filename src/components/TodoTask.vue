<template>
  <div class="todo-task">
    <div class="todo-task__label">
      <input type="checkbox" :value="isDone" />
      <div
        ref="text"
        :contenteditable="isEditing"
        class="todo-task__text"
        @keydown.enter="endEdit"
      >
        {{ text }}
      </div>
    </div>
    <TodoTaskMenu
      ref="menu"
      class="todo-task__menu"
      @open="onMenuOpen"
      @close="onMenuClose"
    >
      <ButtonIcon icon="save" />
      <ButtonIcon icon="undo" />
      <ButtonIcon icon="redo" disabled />
      <ButtonIcon icon="trash" />
    </TodoTaskMenu>
  </div>
</template>

<script>
import TodoTaskMenu from "./TodoTaskMenu.vue";

export default {
  components: {
    TodoTaskMenu
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isEditing: false
    };
  },
  computed: {},
  methods: {
    endEdit() {
      this.isEditing = false;
      this.$refs.menu.close();
    },
    onMenuClose() {
      this.isEditing = false;
    },
    onMenuOpen() {
      this.isEditing = true;
      this.$nextTick(function() {
        this.$refs.text.focus();
      });
    }
  }
};
</script>

<style>
.todo-task {
  display: flex;
  align-items: center;

  position: relative;

  &__label {
    display: flex;
  }

  &__text {
    border-bottom: 1px solid rgba(255, 255, 255, 0);

    transition: border-color 0.1s ease-in;

    &[contenteditable="true"] {
      outline: none;
      border-bottom-color: rgba(0, 0, 0, 0.4);
    }
  }

  &__text,
  &__input {
    font-family: inherit;
    font-size: 1.25rem;
    color: #000;
  }

  &__menu {
    margin-left: 0.33rem;
  }
}
</style>
