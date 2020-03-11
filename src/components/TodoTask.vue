<template>
  <div>
    <label for="">
      <input type="checkbox" />
      <span>{{ name }}</span>
    </label>
    <input type="text" />
    <div class="buttons">
      <button>edit</button>
      <button>remove</button>
      <button>undo</button>
      <button>redo</button>
      <button>save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>
