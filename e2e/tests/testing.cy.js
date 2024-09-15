describe('test', ()=>{

   it('test01', ()=>{
      

         
         cy.visit('https://practice.expandtesting.com/');
         
         cy.viewport(1920, 1080);


         cy.wait(1000);

         cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .card-title > .my-link').click()

         cy.get('[data-testid="file-input"]').attachFile('sone.jfif')

        // cy.get('.suggestion-results__products > .list > :nth-child(2) > .product > .product__info > .product__brand').click()
        // cy.get('input.text.search').each(($el, index, list)=>{


           // if($el.text()=='Tulus'){
            //    cy.wrap($el).click()
            
         })
        

      })
   



