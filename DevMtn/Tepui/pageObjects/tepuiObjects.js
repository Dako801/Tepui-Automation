module.exports = {
    url: 'https://tepui.com/',
    elements: {
        searchIcon: 'a[href="/search"]',
        searchBar: 'input[placeholder="Search"]',
        tent: 'a[href="/products/explorer-series-kukenam-3"]',
        searchResults: 'div[class="preview-container"]',
        submitSearch: 'button[class="fa fa-search search-button"]',
        wrapper: 'select[class="option-wrapper-select"]',
        gear: 'a[data-type="gear"]',
        appearel: '#shopify-section-collection-list-top > section > div > a:nth-child(4)',
        shirt: 'a[href="/products/tepui-logo-shirt-gray"]',
        size: 'select[class="option-wrapper-select"] option[value="X-Large"]',
        addToCart: {
            selector: '//div[@class="quantity-submit"]/button',
            locateStrategy: 'xpath'
        },
        checkOut: 'button[name="checkout"]',
        email: '#checkout_email',
        firstName: '#checkout_shipping_address_first_name',
        lastName: '#checkout_shipping_address_last_name',
        company: '#checkout_shipping_address_company',
        address: '#checkout_shipping_address_address1',
        city: '#checkout_shipping_address_city',
        zip: '#checkout_shipping_address_zip',
        phone: '#checkout_shipping_address_phone',
        continueToShipping: 'button[data-trekkie-id="continue_to_shipping_method_button"]',
        continueToPayment: 'button[data-trekkie-id="continue_to_payment_method_button"]',
        cardNumber: '#number',
        cardName: '#name',
        cardDate: '#expiry',
        cvv: '#verification_value',
        card:'#checkout_payment_gateway_4717149'

    }
}