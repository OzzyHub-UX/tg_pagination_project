const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const TGProjectPagination = require("../../pages/TGProjectPagination");

const tgProjectPagination = new TGProjectPagination()

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	tgProjectPagination.getHeading(heading)
    .should('have.text', heading)
});

Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
	tgProjectPagination.getPopCitiesParagraph()
    .should('have.text', text)
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
	tgProjectPagination.getButton(button).should('be.disabled')
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	tgProjectPagination.getButton(button).should('be.enabled')
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	tgProjectPagination.getButton(button).click()
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (button) => {
    tgProjectPagination.getButton(button).then(($button) => {
      const clickButtonUntilDisabled = () => {
        if ($button.is(':enabled')) {
          $button.click();
  
          tgProjectPagination.getNextButton().then(($nextButton) => {
            if ($nextButton.is(':enabled')) {
              clickButtonUntilDisabled();
            }
          })
        }
      }
      clickButtonUntilDisabled();
    });
  });

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
    
    tgProjectPagination.getCity().should('contain.text', city)

    const dataRow = dataTable.rawTable.flat()

    tgProjectPagination.getInfo().each(($el, index) => {
        cy.wrap($el).should('have.text', dataRow[index])
    })
});






