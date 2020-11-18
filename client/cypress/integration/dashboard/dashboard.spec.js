describe('/', () => {
  beforeEach(() => {
    // login programmatically
    cy.sanctumLogin()

    cy.visit('/')
  })

  it('has correct heading', () => {

    cy.get('h1').contains('Dashboard')

  })
})
