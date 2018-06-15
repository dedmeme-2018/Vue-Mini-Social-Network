import { shallow } from '../../../../node_modules/vue-test-utils'
import App from '../components/App'

describe('App', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallow(App)
  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
