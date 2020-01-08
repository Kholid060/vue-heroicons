import { shallowMount } from '@vue/test-utils';
import HeroIcon from '@/components/HeroIcon.vue';
import { archive } from '@/icons';

const baseProps = {
  fill: 'green',
  name: 'archive',
  height: '26px',
  width: '26px',
};

HeroIcon.add([archive]);
describe('HeroIcons', () => {
  it('rendered an icon', () => {
    const wrapper = shallowMount(HeroIcon, {
      propsData: baseProps,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.props().fill).toBe(baseProps.fill);
    expect(wrapper.props().name).toBe(baseProps.name);
    expect(wrapper.props().width).toBe(baseProps.width);
    expect(wrapper.props().height).toBe(baseProps.height);
  });
});
