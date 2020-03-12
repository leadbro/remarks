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
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>
