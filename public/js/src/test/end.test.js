import { shallow } from '../../../../node_modules/vue-test-utils'
import End from '../components/others/end'

describe('End', () => {
  const wrapper = shallow(End)

  it('renders message correctly', () => {
    const message = wrapper.find('span')
    expect(message.text()).toEqual("arrow_upward   There aren't any more posts in your feed!")
  })

  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has a span', () => {
    expect(wrapper.contains('span')).toBe(true)
  })
})
