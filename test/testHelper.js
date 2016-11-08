import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'

chai.use(chaiEnzyme())

export {
  expect,
  shallow,
  mount,
  render,
}
