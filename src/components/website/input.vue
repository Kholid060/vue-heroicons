<template>
  <div
  class="flex w-full absolute bottom-0 border-gray-300 rounded bg-white items-center py-2 px-4 transition"
  :class="[inputFocus ? 'border-b-2' : 'border-b-4']">
    <input
      type="text"
      placeholder="Search icon"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      v-model="emitData"
      class="bg-transparent flex-grow focus:outline-none text-gray-700">
    <heroicon name="search" class="fill-current text-gray-600"></heroicon>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputFocus: false,
  }),
  computed: {
    emitData: {
      set(val) {
        this.$emit('input', val);
      },
      get() {
        return this.value;
      },
    },
  },
};

</script>
