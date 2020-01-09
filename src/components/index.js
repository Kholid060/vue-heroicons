import HeroIcon from './HeroIcon.vue';

export default {
  install(Vue) {
    Vue.component(HeroIcon.name, HeroIcon);
  },
  add(icons) {
    HeroIcon.add(icons);
  },
};

export { HeroIcon };
