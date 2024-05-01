describe('1. Home Page with three Sliders only', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('should navigate to Home page and verify three sliders', () => {

        cy.contains('Shop').click()
        cy.contains('Home').click()
        cy.get('[class="row_inner_wrapper"]').should('have.length', 3);
    });

    it('should navigate to Home page and verify three Arrivals', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
    });
    it('should navigate to Home page, verify three Arrivals, and test book navigation', () => {

        cy.contains('Shop').click();


        cy.contains('Home').click();

        // Verificar se a página Home possui exatamente três Arrivals
        cy.get('.products').find('.product').should('have.length', 3);

        // Clicar na primeira imagem de Arrival
        cy.get('.products .product').eq(0).find('img').click();

        // Verificar se foi redirecionado para a página do livro
        cy.url().should('include', '/product/');

        // Verificar se há um botão "Add to basket" na página do livro
        cy.contains('Add to basket').should('exist');
    });

    it.only('should navigate to Home page, verify Arrivals, navigate to book details, and check description', () => {
        cy.contains('Shop').click();


        cy.contains('Home').click();

        // Verificar se a página Home possui exatamente três Arrivals
        cy.get('.products').find('.product').should('have.length', 3);

        // Clicar na primeira imagem de Arrival
        cy.get('.products .product').eq(0).find('img').click();

        // Verificar se foi redirecionado para a página de detalhes do livro
        cy.url().should('include', '/product/');

        // Verificar se a imagem na página de detalhes é clicável
        cy.get('.images img').should('be.visible')
            .click()
        cy.get('.pp_expand').click({ force: true })
        cy.get('.pp_close').click()

        // Verificar se foi redirecionado para a próxima página onde o usuário pode adicionar o livro ao carrinho
        cy.contains('Add to basket').should('exist');

        // Clicar na guia "Description" na página de detalhes do livro
        cy.contains('Description').click();

        // Verificar se há uma descrição do livro exibida
        cy.get('#tab-description > p').should('be.visible');
    });


})