describe('Index', () => {
    it('should display the page correctly if a user is not logged in', () => {
        cy
            .visit('/')
            .get('h1').contains('All Users')
            .get('.navbar-burger').click()
            .get('.navbar-item').contains('User Status').should('not.be.visible')
            .get('.navbar-item').contains('Log Out').should('not.be.visible')
            .get('.navbar-item').contains('Log In')
            .get('.navbar-item').contains('Register');
    });
});