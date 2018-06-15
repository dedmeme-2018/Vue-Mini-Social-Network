import { shallow } from '../../../../node_modules/vue-test-utils'
import Overlay from '../components/others/overlay'

describe('Overlay', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallow(Overlay)
  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

})
