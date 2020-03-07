<template>
  <div id="app" class="bg-gray-100">
    <div class="bg-blue-500 justify-center align-center relative" style="min-height: 300px">
      <a
      href="https://github.com/Kholid060/vue-heroicons"
      target="_blank"
      class="flex items-center absolute right-0 mt-4 rounded px-3 py-2 mr-6 github-btn">
        <img :src="require('./assets/github.png')" class="w-6">
        <p class="text-white font-medium ml-3">Github</p>
      </a>
      <div class="lg:w-5/12 sm:w-10/12 header text-white text-center">
        <p class="text-4xl font-bold uppercase title">Vue Heroicons</p>
        <p class="text-base font-medium mt-1">Free 104 premium SVG icons for your Vue.js project</p>
        <my-input v-model="search"></my-input>
      </div>
    </div>
    <div class="lg:w-7/12 my-6 mx-auto px-6">
      <p class="cursor-pointer text-lg font-medium mb-3">Icons</p>
      <div class="icons flex flex-wrap">
        <div
          v-for="icon in filteredBySearch"
          class="p-2 sm:w-3/12  lg:w-2/12"
          :title="icon.name"
          :key="icon.icon">
          <div
           class="bg-white relative h-full rounded py-4 icon-container px-2 text-center cursor-pointer"
           :class="[icon.selected ? 'text-blue-600 active' : 'text-gray-700']"
           @click="icons[icon.index].selected = !icons[icon.index].selected">
            <heroicon :name="icon.name" class="fill-current" height="25" width="25"></heroicon>
            <p class="font-medium mt-3 text-xs overflow-hidden truncate">{{icon.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <selected :selected="selectedIcons" v-show="selectedIcons.length !== 0"></selected>
  </div>
</template>
<script>
import MyInput from './components/website/input.vue';
import Selected from './components/website/selected.vue';
import iconName from './icon-name';

export default {
  name: 'app',
  components: { MyInput, Selected },
  data: () => ({
    icons: [],
    search: '',
  }),
  computed: {
    selectedIcons() {
      return this.icons.filter(icon => icon.selected);
    },
    filteredBySearch() {
      return this.icons.filter(icon => icon.name.match(this.search.toLowerCase()));
    },
  },
  watch: {
    selectedIcons: {
      handler(value) {
        localStorage.setItem('selectedIcons', JSON.stringify(value.map(icon => icon.icon)));
      },
      deep: true,
    },
  },
  mounted() {
    const selected = JSON.parse(localStorage.getItem('selectedIcons')) || [];

    this.icons = iconName.map((icon, index) => ({ ...icon, index, selected: selected.includes(icon.icon) }));
  },
};

</script>
