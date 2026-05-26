describe('Todo App Test', () => {

  it('Benutzer kann neue Aufgaben hinzufügen', () => {

    cy.visit('https://todomvc.com/examples/react/dist/')

    cy.get('.new-todo')
      .should('be.visible')
      .type('QA Automation lernen{enter}')

    cy.get('.todo-list')
      .should('contain', 'QA Automation lernen')

  })

})