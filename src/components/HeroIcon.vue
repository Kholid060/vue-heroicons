<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" @click="$emit('click')"
    :class="['heroicon-ui', name]"
    :width="width"
    :fill="fill" :height="height"
    v-html="icon">
  </svg>
</template>
<script>
export default {
  name: 'heroicon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 24,
    },
    height: {
      type: [String, Number],
      default: 24,
    },
    fill: {
      type: String,
      default: 'inherit',
    },
  },
  lib: [],
  add(icons) {
    if (Array.isArray(icons)) {
      this.lib = icons;
    } else {
      this.lib.push(icons);
    }
  },
  computed: {
    icon() {
      const findIcon = this.$options.lib.find(icon => icon.name === this.name);

      if (findIcon) {
        return findIcon.path;
      }
      /* eslint-disable no-console */
      console.error(`Can't find ${this.name}`);
      /* eslint-enable no-console */
      return undefined;
    },
  },
};

</script>
<style>
.heroicon-ui {
  display: inline-block;
}

</style>
