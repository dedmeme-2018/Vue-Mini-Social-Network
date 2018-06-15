import { shallow } from '../../../../node_modules/vue-test-utils'
import Prompt from '../components/others/prompt'

describe('App', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallow(Prompt)
  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('renders default title correctly', () => {
    const message = wrapper.find('span')
    expect(message.text()).toEqual("Title")
  })

  it('renders default title correctly', () => {
    const message = wrapper.find('i')
    expect(message.text()).toEqual("clear")
  })

})
