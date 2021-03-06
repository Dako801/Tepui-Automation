module.exports = (tepuiObjects, input) => {

    tepuiObjects
        .click('@gear')
        .waitForElementPresent('@appearel', 5000)
        .click('@appearel')
        .waitForElementPresent('@shirt', 5000)
        .click('@shirt')
        .waitForElementPresent('@addToCart', 5000)
        .click('@addToCart')
        .waitForElementPresent('@checkOut', 20000)
        .click('@checkOut')
        .setValue('@email', input.email)
        .setValue('@firstName', input.firstName)
        .setValue('@lastName', input.lastName)
        .setValue('@company', input.company)
        .setValue('@address', input.address)
        .setValue('@city', input.city)
        .setValue('@zip', input.zip)
        .setValue('@phone', input.phone)
        .click('@continueToShipping')
        .waitForElementPresent('span[data-shipping-method-label-title="Economy Shipping"]', 10000)
        .click('@continueToPayment')
        .waitForElementPresent('@card', 500)
        .click('@card')
        // .sendKeys('\uE004')
        // .sendKeys(input.cardNumber)
        // .sendKeys('\uE004')
        // .sendKeys(input.cardName)
        // .sendKeys('\uE004')
        // .sendKeys(input.cardDate)
        // .sendKeys('\uE004')
        // .sendKeys(input.cvv)
}

