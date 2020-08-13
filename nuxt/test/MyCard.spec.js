import { mount } from '@vue/test-utils'
import MyCard from '@/components/MyCard.vue'

describe('MyCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
