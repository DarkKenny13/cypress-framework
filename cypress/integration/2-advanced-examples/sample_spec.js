describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    }),
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
      })
  })