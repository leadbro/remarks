<template>
  <button class="button-icon">
    <component :is="iconComponentName" class="icon" />
    <slot />
  </button>
</template>

<script>
import { upperFirst, camelCase } from "lodash";

export default {
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconComponentName() {
      return "Icon" + upperFirst(camelCase(this.icon));
    }
  }
};
</script>

<style scoped>
.button-icon {
  --size: 1.75rem;

  display: block;

  height: var(--size);
  width: var(--size);

  border: none;
  background: none;
  cursor: pointer;
  padding: 0.15rem;

  outline: none;

  transition: opacity 0.1s ease-in;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  .icon {
    height: 100%;
    width: 100%;
  }
}
</style>
