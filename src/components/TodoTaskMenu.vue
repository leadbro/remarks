<template>
  <div :class="taskMenuClasses">
    <ButtonIcon class="task-menu__button" icon="menu" @click.native="onClick" />
    <div class="task-menu__menu">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false
    };
  },
  computed: {
    taskMenuClasses() {
      return {
        "task-menu": true,
        "is-opened": this.isOpened
      };
    }
  },
  methods: {
    onClick() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
    close() {
      this.isOpened = false;
    }
  }
};
</script>

<style>
.task-menu {
  position: relative;
  width: 1.5rem;

  &__button svg {
    transition: transform 0.15s ease-in;
  }

  &__menu {
    display: inline-flex;

    opacity: 0;
    transition: opacity 0.1s ease-in, transform 0.1s ease-in,
      max-width 0.15s ease-in;

    transform: rotateZ(-30deg);
    transform-origin: left;

    position: absolute;
    left: calc(100% + 0.33rem);
    top: 0;
    max-width: 0;
  }

  &.is-opened &__menu {
    opacity: 1;
    transform: rotateZ(0);
    max-width: 10rem;
  }

  &.is-opened &__button svg {
    transform: rotateZ(90deg);
  }
}
</style>
