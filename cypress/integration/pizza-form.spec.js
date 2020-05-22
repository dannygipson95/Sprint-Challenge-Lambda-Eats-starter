describe('Form inputs and links', () => {
    it ('Can navigate to the site',() => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it ('Form link works', () => {
        cy.get('a').click().url()
        .should('include', 'pizza')
    })

    it ('Button is disabled', () => {
        cy.get('button')
          .should('be.disabled')
    })

    it ('Can type a name', () => {
        cy.get('input[name="name"]')
          .type('Boaty Mcboatface')
          .should('have.value', 'Boaty Mcboatface')
    })

    it ('Can select sizes', () => {
        cy.get('select')
          .select('Personal')
          .should('have.value', 'personal')
        cy.get('select')
        .select('Small')
        .should('have.value', 'small')
        cy.get('select')
        .select('Medium')
        .should('have.value', 'medium')
        cy.get('select')
        .select('Large')
        .should('have.value', 'large')
        cy.get('select')
        .select('Heroic')
        .should('have.value', 'heroic')
    })

    it('Can select sauces', () =>{
        cy.get('.classicRed').click().should('have.value', 'classicRed')
        cy.get('.garlicAlfredo').click().should('have.value', 'garlicAlfredo')
        cy.get('.creamyPesto').click().should('have.value', 'creamyPesto')
        cy.get('.barbeque').click().should('have.value', 'barbeque')
        
    })

    it('Can select toppings', () => {
        cy.get('input[name="pepperoni"]').click()
        .should('have.checked', true)
        cy.get('input[name="pepperoni"]').click()
        .should('not.have.checked')
        cy.get('input[name="sausage"]').click()
        .should('have.checked', true)
        cy.get('input[name="sausage"]').click()
        .should('not.have.checked')
        cy.get('input[name="chicken"]').click()
        .should('have.checked', true)
        cy.get('input[name="chicken"]').click()
        .should('not.have.checked')
        cy.get('input[name="mushrooms"]').click()
        .should('have.checked', true)
        cy.get('input[name="mushrooms"]').click()
        .should('not.have.checked')
        cy.get('input[name="greenPeppers"]').click()
        .should('have.checked', true)
        cy.get('input[name="greenPeppers"]').click()
        .should('not.have.checked')
        cy.get('input[name="onions"]').click()
        .should('have.checked', true)
        cy.get('input[name="onions"]').click()
        .should('not.have.checked')
        cy.get('input[name="bananaPeppers"]').click()
        .should('have.checked', true)
        cy.get('input[name="bananaPeppers"]').click()
        .should('not.have.checked')
        cy.get('input[name="jalapenos"]').click()
        .should('have.checked', true)
        cy.get('input[name="jalapenos"]').click()
        .should('not.have.checked')
        cy.get('input[name="hotSauce"]').click()
        .should('have.checked', true)
        cy.get('input[name="hotSauce"]').click()
        .should('not.have.checked')
        cy.get('input[name="extraCheese"]').click()
        .should('have.checked', true)
        cy.get('input[name="extraCheese"]').click()
        .should('not.have.checked')
    })

    it ('Can type special instructions', () => {
        cy.get('input[name="specialInstructions"]')
        .type('aslkdf;laksjd;flkajsdf')
        .should('have.value', 'aslkdf;laksjd;flkajsdf')
    })

    it ('Can navigate back home', () => {
        cy.get('a').click().url().should('not.include', 'pizza')
    })
})

describe('Validation', () => {
    it('validates name', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.contains('Name must be at least two characters')
        .should('not.exist')
        cy.get('input[name="name"]').type('l')
        cy.contains('Name must be at least two characters')
        .should('exist')
        cy.get('input[name="name"]').type('l')
        cy.contains('Name must be at least two characters')
        .should('not.exist')
    })

    it('validates size', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.contains('Size is required')
        .should('not.exist')
        cy.get('select')
        .select('Small')
        cy.get('select')
        .select('--Select a size--')
        cy.contains('Size is required')
        .should('exist')
    })

})

describe('Submitting', () => {
    it('Can submit an order', () => {
        cy.get('input[name="name"]')
        .type('Boaty Mcboatface')
        cy.get('select').select('Small')
        cy.get('.classicRed').click()
        cy.get('button').click()
        cy.get('input[name="name"]')
        .should('not.have.value','Boaty Mcboatface')
        cy.get('select').should('have.value', '')
    })
})