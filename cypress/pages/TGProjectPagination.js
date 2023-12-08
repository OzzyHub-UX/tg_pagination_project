class TGProjectPagination {

    getPaginationHeading() {
        return cy.get('.is-size-3')
    }

    getWrldCityHeading() {
        return cy.get('#sub_heading')
    }

    getPopCitiesParagraph() {
        return cy.get('#content')
    }

    getHeading(heading) {
        return heading === 'Pagination' ? this.getPaginationHeading() : this.getWrldCityHeading()
    }

    getPreviousButton() {
        return cy.get('#previous')
    }

    getNextButton() {
        return cy.get('#next')
    }

    getButton(button){
        return button === 'Next' ? this.getNextButton() : this.getPreviousButton()
    }

    clickPreviousButton() {
        return this.getPreviousButton().click()
    }

    clickNextButton() {
        return this.getNextButton().click()
    }

    getCricles() {
        return cy.get('.circle')
    }

    getInfo(){
        return cy.get('.city_info,.country_info,.population_info')
    }

    getCity(){
        return cy.get('.city_info')
    }
    


}

module.exports = TGProjectPagination