describe("Loading the blog Page", () => {
  it("Visits the main page", () => {
    // Visiting the main page
    cy.visit("http://localhost:8000");
  });

  it("Retrieves and saves JSON data locally the Vivec Blogs", () => {
    // Test API connection
    cy.request(
      "https://pa6bmhahhc.execute-api.ap-southeast-2.amazonaws.com/"
    ).should((response) => {
      expect(response.status).to.eq(200);
    });

    // Retrieving Sermons from API
    cy.visit("https://pa6bmhahhc.execute-api.ap-southeast-2.amazonaws.com/");
    cy.request("api/sermons/");
    // cy.get('@post').should('have.property', 'status', 201)

    // Check all 36 Sermons are in the state.

    // Viewing the sermons
    cy.get('[data-testid="messageText"]').type("New message");
  });
});
