describe('Compra bem-sucedida no SauceDemo v1', () => {
  it('Deve fazer login, adicionar produtos e finalizar compra', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html', { timeout: 120000 });


    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();

    // Adiciona 3 produtos ao carrinho
    // Adiciona 3 produtos (os 3 primeiros)
    cy.get('button.btn_primary.btn_inventory').eq(0).click();
    cy.get('button.btn_primary.btn_inventory').eq(1).click();
    cy.get('button.btn_primary.btn_inventory').eq(2).click();

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click();

    // Clica em checkout
    cy.get('a.btn_action.checkout_button').click();

    // Preenche os dados do comprador
    cy.get('[data-test="firstName"]').type('Teste');
    cy.get('[data-test="lastName"]').type('Automacao');
    cy.get('[data-test="postalCode"]').type('12345');

    // Continua para a próxima etapa
    cy.get('input.btn_primary.cart_button[type="submit"]').click();

    // Finaliza a compra
    cy.get('a.btn_action.cart_button').click();

    // Valida mensagem de sucesso
        cy.get('.complete-header')
    .should('be.visible')
    .and('have.text', 'THANK YOU FOR YOUR ORDER');

  });
});
