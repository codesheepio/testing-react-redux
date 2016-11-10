import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import { jsdom } from 'jsdom'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(chaiEnzyme())
chai.use(sinonChai)

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js',
}

export {
  expect,
  shallow,
  mount,
  render,
  sinon,
}
