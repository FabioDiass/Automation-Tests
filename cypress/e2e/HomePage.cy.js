describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('1. Home Page with three Sliders only', () => {
        cy.contains('Shop').click()
        cy.contains('Home').click()
        cy.get('[class="row_inner_wrapper"]').should('have.length', 3);
    });

    it('2. Home page with three Arrivals only', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
    });
    it('3. Home page - Images in Arrivals should navigate', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products .product').eq(0).find('img').click();
        cy.url().should('include', '/product/');
        cy.contains('Add to basket').should('exist');
    });

    it('4. Home page - Arrivals-Images-Description', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products .product').eq(0).find('img').click();
        cy.url().should('include', '/product/');
        cy.get('.images img').should('be.visible').click()
        cy.get('.pp_expand').click({ force: true })
        cy.get('.pp_close').click()
        cy.contains('Add to basket').should('exist');
        cy.contains('Description').click();
        cy.get('#tab-description > p').should('be.visible');
    });

    it('5. Home page - Arrivals-Images-Reviews', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products .product').eq(0).find('img').click();
        cy.url().should('include', '/product/');
        cy.get('.images img').should('be.visible').click()
        cy.get('.pp_close').click()
        cy.contains('Add to basket').should('exist');
        cy.contains('Reviews').click();
        cy.get('#reviews').should('be.visible');
        cy.contains('reviews').should('be.visible')
    });

    it('6. Home page - Arrivals-Images-Add to Basket', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products .product').eq(0).find('img').click();
        cy.url().should('include', '/product/');
        cy.contains('Add to basket').click();
        cy.get('.woocommerce-message').should('contains.text', '“Selenium Ruby” has been added to your basket.')
        cy.contains('added to your basket').should('be.visible');
        cy.contains('Basket').click();
        cy.contains('Selenium Ruby').should('exist');
      });

      it.only('7. Home page - Arrivals-Add to Basket with more books', () => {
        cy.contains('Shop').click();
        cy.contains('Home').click();
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products .product').eq(0).find('img').click();
        cy.url().should('include', '/product/');
        cy.get('.images img').should('be.visible')
        cy.contains('Add to basket').click();
        cy.contains('added to your basket').should('be.visible');
        cy.get('[id="wpmenucartli"]').should('be.visible')
        cy.contains('Basket').click();
        // // Verificar se o livro adicionado está presente no carrinho
        cy.get('.product-name > a').should('exist');

    
        // // Obter o número disponível de livros em estoque (por exemplo, 20)
        cy.get('.quantity > .input-text').invoke('text').then((text) => {
          const stockCount = parseInt(text.trim(), 10);
    
        //   // Tentar adicionar mais livros do que o disponível em estoque
          const quantityToAdd = stockCount + 1;
    
        //   // Limpar o campo de quantidade atual
        cy.get('.quantity > .input-text').type(quantityToAdd.toString());
    
        //   // Clicar no botão "Update basket" para tentar adicionar mais livros do que o disponível
            cy.contains('Update').click();
    
        //   // Verificar se a mensagem de erro é exibida corretamente
           cy.contains('must be between 1 and ' + stockCount).should('be.visible');
        });
      });





})