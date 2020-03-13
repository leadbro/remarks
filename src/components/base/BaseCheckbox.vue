<template>
  <label class="base-checkbox" :class="baseCheckboxClass">
    <input
      v-bind="$attrs"
      :value="value"
      type="checkbox"
      class="base-checkbox__input"
      v-on="listeners"
    />
    <span class="base-checkbox__checkbox"></span>
    <span class="base-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "BaseCheckbox",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    colorScheme: {
      type: String,
      default() {
        return "black";
      }
    }
  },
  data() {
    return {
      types: [undefined]
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: e => {
          this.$emit("change", e.target.value);
        }
      };
    },
    baseCheckboxClass() {
      return {
        "base-checkbox--white": this.colorScheme === "white",
        "base-checkbox--black": this.colorScheme === "black"
      };
    }
  }
};
</script>

<style>
/*todo: убрать возможность выделить текст*/
.base-checkbox {
  &--white {
    --border-color: #bababa;
    --border-color-hover: #fdfeff;
    --color: #fdfeff;
  }

  &--black {
    --border-color: #000;
    --border-color-hover: #000;
    --color: #000;
  }

  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &__input {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  &__checkbox {
    --checkbox-size: 1.25rem;
    border: 1px solid var(--border-color);
    margin-right: 0.5rem;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    position: relative;
    transition: border-color 0.2s ease-in;

    flex-shrink: 0;
    &:after {
      content: "";
      display: block;
      border: 1px solid var(--border-color-hover);
      border-top: none;
      border-left: none;
      position: absolute;
      top: calc(50% - 0.66rem);
      left: calc(50% - 0.25rem);
      width: 0.45rem;
      height: 0.9rem;
      transform: rotateZ(0deg);
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
    }
  }
  &__input:focus + &__checkbox {
    border: 1px solid var(--border-color-hover);
  }
  &:hover &__checkbox {
    border: 1px solid var(--border-color-hover);
  }
  &__input:checked + &__checkbox:after {
    transform: rotateZ(45deg);
    opacity: 1;
  }
  &__label {
    color: var(--color);
    a {
      color: inherit;
    }
  }
}
</style>
