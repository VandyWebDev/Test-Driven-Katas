const { expect } = require('chai');
const wrap = require('./wrap');

describe ('wrap', () => {
  xit('Wrap is a function', () => {
    expect(typeof wrap).to.equal('function');
  })
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
})
