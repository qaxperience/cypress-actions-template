describe('Login', () => {
    const modalContent = '.swal2-html-container'
    const toast = 'div[role=status]'

    it ('usuário obrigatório', ()=> {
        cy.login(null, 'teste')
        cy.get(toast)
            .should('have.text', 'Informe o seu nome de usuário!')
    })

    it ('senha obrigatória', ()=> {
        cy.login('qa', null)
        cy.get(toast)
            .should('have.text', 'Informe a sua senha secreta!')
    })

    it('usuário não existe', () => {
        cy.login('teste', 'teste')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('senha incorreta', () => {
        cy.login('qa', 'teste')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('com sucesso', () => {
        cy.login('qa', 'xperience')
        cy.get(modalContent)
            .should('have.text', 'Suas credenciais são válidas :)')
    })
})
