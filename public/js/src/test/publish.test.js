import { shallow } from '../../../../node_modules/vue-test-utils'
import Publish from '../components/ads/publish'

describe('Publish', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallow(Publish)
  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
