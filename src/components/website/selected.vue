<template>
  <div
  class="mt-6 fixed right-0 bottom-0 mb-8 mr-4 flex flex-col items-center lg:w-4/12 sm:w-full md:w-full">
    <transition name="grow">
      <div class="bg-white border px-4 py-3 mb-3 shadow-xl rounded" v-if="showUsage">
        <div class="flex justify-between items-center">
          <p class="font-bold text-xl inline-block">Usage</p>
          <p class="float-right font-medium text-sm">
            <span class="text-blue-400">{{selected.length}}</span>
            Icons
          </p>
        </div>
        <pre class="my-3 px-4 py-5 bg-gray-200 rounded block overflow-auto" style="max-width: 390px" v-html="code"></pre>
      </div>
    </transition>
    <div
    class="bg-white border rounded-full text-base flex items-center shadow-xl p-2 cursor-pointer transition"
    @click="showUsage = !showUsage">
      <heroicon name="x" v-if="showUsage"></heroicon>
      <span class="text-blue-400 mx-2 font-medium" v-else>{{selected.length}}</span>
      <div class="inline-block bg-gray-200 h-full mx-2" style="width: 2px; height: 25px;"></div>
      <span class="mr-2">{{showUsage ? 'Close' : 'Selected'}}</span>
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function code(icons) {
  return `//main.js
import Vue from 'vue'
import HeroIcon from 'vue-heroicons'
import { ${icons} } from 'vue-heroicons/src/icons'

HeroIcon.add([${icons}])
Vue.use(HeroIcon)
`;
}

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    showUsage: false,
  }),
  computed: {
    code() {
      const icons = this.selected.map(({ icon }) => icon).join(', ');
      return Prism.highlight(code(icons), Prism.languages.javascript, 'javascript');
    },
  },
};

</script>
<style>
.usage-button:hover {
  transform: scale(1.05);
}

.grow-enter-active,
.grow-leave-active {
  transition: all .2s ease;
}

.grow-enter,
.grow-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

</style>
