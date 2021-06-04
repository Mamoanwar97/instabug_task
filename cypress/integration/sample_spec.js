describe('My First Test', () => {
    it('Valid login', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').type('mohamed7@instabug.com')
        cy.get('#password').type('12345678A')
        cy.get('#submit-button').click()
        cy.url().should('eq', 'http://localhost:3000/welcome') // => true
      })

      it('inValid mail login', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').type('mamoanwar@instabug.com')
        cy.get('#password').type('12345678A')
        cy.get('#submit-button').click()
        cy.contains('your email or password is incorrect')
        cy.url().should('eq', 'http://localhost:3000/login') // => true
      })

      it('inValid password login', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').type('mohamed7@instabug.com')
        cy.get('#password').type('1234567890A')
        cy.get('#submit-button').click()
        cy.contains('your email or password is incorrect')
        cy.url().should('eq', 'http://localhost:3000/login') // => true
      })
  })
