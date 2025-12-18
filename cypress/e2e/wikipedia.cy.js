/// <reference types="Cypress" />

// describe - Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('My First Test', () => {
  // it - Mocha.js:n toiminto, joka kuvastaa yksittäistä testitapausta
  it('clicking "type" shows the right headings', () => {
    // cy. - viittaa Cypressin toimintoihin
    // mennään suomenkieliselle wikipedia sivustolle
    cy.visit('https://fi.wikipedia.org/');

    // Odotetaan 5 sekuntia
    cy.wait(5000);

    //Clikataan hakua
    cy.contains('Haku').click();
    // Etsitään hakukenttä ja syötetään tekstiä
    cy.get('.cdx-text-input__input').first().as('txt').type('Jamk');
    cy.get('@txt').should('have.value', 'Jamk');
    // odotetaan puoli sekuntia varulta
    cy.wait(500);

    //clikataan hakua
    cy.get('.cdx-search-input__end-button').first().click();

    //Tarkistetaan että URL on oikea
    cy.url().should('contain', 'Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    //Etsitään ja rullataan kohtaan Kampukset ja tarkistetaan että näkyy
    cy.contains('h2', 'Kampukset').scrollIntoView().should('be.visible');

    // Odottaa 5 sek
    cy.wait(5000);

    //Mennään englannin kieliselle sivulle
    cy.get('#p-lang-btn-checkbox').click();
    cy.contains('English').should('have.class', 'autonym').click();

    //Tarkistetaan että ollaan englannin kielisellä sivulla
    cy.url().should(
      'contain',
      'https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences'
    );
  });
});
