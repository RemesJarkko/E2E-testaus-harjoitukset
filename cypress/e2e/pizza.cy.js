/// <reference types="Cypress" />

// describe - Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('My First Test', () => {
  // it - Mocha.js:n toiminto, joka kuvastaa yksittäistä testitapausta
  it('clicking "type" shows the right headings', () => {
    // Menee sivustolle: https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');

    // odottaa 1 sekuntia
    cy.wait(1000);

    // Täyttää nimikentän, puhelin-kentän ja sposti-osoite-kentän ja tarkistaa tiedot
    cy.get('#nimi').type('Jarkko Remes').should('have.value', 'Jarkko Remes');
    cy.get('#puhelin')
      .type('+358 45 122 3434')
      .should('have.value', '+358 45 122 3434');
    cy.get('#sposti')
      .type('AG1534@student.jamk.fi')
      .should('have.value', 'AG1534@student.jamk.fi');

    // Valitaan pizzan koko
    cy.get('select#koko')
      .select('Mega')
      .find('option:selected')
      .should('have.text', 'Mega');

    // Valitaan ruis pohja
    cy.get('#Ruis').check().should('be.checked');

    // Valitaan täytteet
    cy.get('#Kinkku').check().should('be.checked');
    cy.get('#Ananas').check().should('be.checked');
    cy.get('#Tonnikala').check().should('be.checked');

    // Tarkistetaan hinta
    cy.contains('Hinta:').should('contain', '16');
  });
});
