import { shallow } from '../../../../node_modules/vue-test-utils'
import Deavtivate from '../components/deactivate/deavtivate'

describe('Deactivate', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallow(Deavtivate)
  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('toggles deactivate bool', () => {
    expect(wrapper.vm.deactivated).toBe(false)

    const button = wrapper.find('a')
    button.trigger('click')

    expect(wrapper.vm.deactivated).toBe(true)

  })

})
