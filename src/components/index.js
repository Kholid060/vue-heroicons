import HeroIcon from './HeroIcon';

export default {
  install(Vue) {
    Vue.component(HeroIcon.name, HeroIcon);
  },
  add(icons) {
    HeroIcon.add(icons);
  },
};

export { HeroIcon };
