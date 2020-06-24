module.exports = {
  'Check if append works': function (browser) {
    browser
      .url(browser.launch_url + 'core.html')
      .waitForElementVisible('body')
      .execute(function () {
        const $table = $('table')
        $table.bootstrapTable('append', {
          id: 99,
          name: 'Appended Item',
          price: 99
        })
        return $table.bootstrapTable('getData')
      }, [], function (result) {
        const dataSet = result.value
        const lastDataSet = dataSet[dataSet.length - 1]
        browser.assert.equal(Array.isArray(dataSet), true)
        browser.assert.equal(dataSet.length, 22)
        browser.assert.equal(lastDataSet.id, 99)
        browser.assert.equal(lastDataSet.name, 'Appended Item')
        browser.assert.equal(lastDataSet.price, 99)
      })
  }
}