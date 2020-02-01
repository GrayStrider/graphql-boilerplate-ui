import {shallowMount, createLocalVue} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

describe('HelloWorld.vue', () => {

  
  it('renders props.msg when passed', () => {
    Vue.use(Vuetify)
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
