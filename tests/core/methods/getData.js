module.exports = {
  'Check if getData works': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .waitForElementVisible('body')
      .execute(function () {
        return $('table').bootstrapTable('getData')
      }, [], function (result) {
        browser.assert.equal(Array.isArray(result.value), true)
        browser.assert.equal(result.value.length, 21)
      })
  },
  'Check if getData with includeHiddenRows works': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .waitForElementVisible('body')
      .execute(function () {
        const $table = $('table')
        $table.bootstrapTable('hideRow', {index: 2})
        return $table.bootstrapTable('getData', {includeHiddenRows: false})
      }, [], function (result) {
        browser.assert.equal(Array.isArray(result.value), true)
        browser.assert.equal(result.value.length, 20)
      })
  },
  'Check if getData with unfiltered works': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .waitForElementVisible('.search-input')
      .setValue('.search-input', 'Item 1')
      .execute(function () {
        return $('table').bootstrapTable('getData', {unfiltered: true})
      }, [], function (result) {
        browser.assert.equal(Array.isArray(result.value), true)
        browser.assert.equal(result.value.length, 21)
      })
  },
  'Check if getData with useCurrentPage works': function (browser) {
    browser
      .url(browser.launch_url + 'core-pagination.html')
      .waitForElementVisible('body')
      .execute(function () {
        return $('table').bootstrapTable('getData', {useCurrentPage: true})
      }, [], function (result) {
        browser.assert.equal(Array.isArray(result.value), true)
        browser.assert.equal(result.value.length, 10)
      })
  }
}