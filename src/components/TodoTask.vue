<template>
  <li v-click-outside="endEdit" class="todo-task">
    <div class="todo-task__label">
      <BaseCheckbox
        :disabled="isEditing"
        @click.native="onCheckboxClick"
        @dblclick.native="onCheckboxDblclick"
      >
        <div
          ref="text"
          :contenteditable="isEditing"
          class="todo-task__text"
          tabindex="0"
          @keydown="onTextEdit"
        >
          {{ text }}
        </div>
      </BaseCheckbox>
    </div>
    <TodoTaskMenu
      ref="menu"
      class="todo-task__menu"
      @open="onMenuOpen"
      @close="onMenuClose"
    >
      <ButtonIcon icon="save" />
      <ButtonIcon icon="undo" />
      <ButtonIcon icon="trash" />
    </TodoTaskMenu>
  </li>
</template>

<script>
import vClickOutside from "v-click-outside";
import TodoTaskMenu from "./TodoTaskMenu.vue";
import setCursorToEnd from "@/helpers/setCursorToEnd.js";

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
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
      isEditing: false,
      maxlength: 10
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onCheckboxDblclick() {
      this.startEdit();
      this.$refs.menu.open();
    },
    onCheckboxClick() {
      this.endEdit();
    },
    onTextEdit(e) {
      const isCharacterKey = keyCode => {
        const pattern = /@"[-.?!)(,:]"/i;
        return !pattern.test(String.fromCharCode(keyCode));
      };

      if (isCharacterKey(e.keyCode)) {
        if (e.currentTarget.innerText.length >= this.maxlength) {
          e.preventDefault();
          return false;
        }
      } else {
        if (e.key === "Enter" || e.key === "Escape") {
          this.endEdit();
          return false;
        }
      }
    },
    endEdit() {
      this.isEditing = false;
      this.$refs.menu.close();
    },
    startEdit() {
      this.isEditing = true;
      this.$nextTick(function() {
        this.$refs.text.focus();
        setCursorToEnd(this.$refs.text);
      });
    },
    onMenuClose() {
      this.isEditing = false;
    },
    onMenuOpen() {
      this.isEditing = true;
      this.$nextTick(function() {
        this.$refs.text.focus();
        setCursorToEnd(this.$refs.text);
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

    outline: none;
    transition: border-color 0.1s ease-in;

    &[contenteditable="true"] {
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
