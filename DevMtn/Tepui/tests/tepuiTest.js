var tepui = ''
var search = require('./test-assets/search')
var testData = require('./test-assets/testData')
var cart = require('./test-assets/cart')
module.exports = {
    beforeEach: browser => {
        tepui = browser.page.tepuiObjects()
        tepui.navigate()
    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/Q7D-44
    'searchForItem': browser => {
        testData.searchInfo.forEach(test => {
            search(tepui, test)
        });
    },
    // https://dmutah.atlassian.net/browse/Q7D-46
    'addItemToCart': browser => {
        testData.cartData.forEach(test => {
            cart(tepui, test)
        });
    },

}
