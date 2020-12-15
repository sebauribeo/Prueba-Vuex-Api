import { shallowMount } from '@vue/test-utils';
import NotFound from '../../src/views/NotFound.vue';

// TESTING NOT FOUND

describe('Prueba al componente Footer.vue', () => {
    it('Tercer Testing', () => {
      const wrapper = shallowMount(NotFound);

    expect(wrapper.find("h2").text());
    })
})