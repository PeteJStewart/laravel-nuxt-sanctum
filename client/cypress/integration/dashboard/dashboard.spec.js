describe('/', () => {
  beforeEach(() => {
    // login programmatically
    // cy.login()

    cy.visit('/')
  })

  it('has correct heading', () => {

    cy.contains('Dashboard')

  })
})
