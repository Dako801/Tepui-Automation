module.exports = (tepuiObjects, input) => {

    tepuiObjects
        .click('@searchIcon')
        .click('@searchBar')
        .setValue('@searchBar', input.searchBar)
        .click('@submitSearch')
        .click('@tent')
    tepuiObjects
        .expect.element('@wrapper').to.be.visible;
}
