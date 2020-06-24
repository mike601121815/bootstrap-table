module.exports = {
  'Check if table loads data': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .expect.elements('tbody > tr').count.to.equal(21)
  },
  'Check if search works': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .waitForElementVisible('.search-input')
      .setValue('.search-input', 'Item 1')
      .expect.elements('tbody > tr').count.to.equal(11)
  },
}