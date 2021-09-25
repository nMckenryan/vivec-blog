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
  });

  it("Importing Sermons", () => {
    // Retrieving Sermons from API
    cy.visit("https://pa6bmhahhc.execute-api.ap-southeast-2.amazonaws.com/");
    cy.request("api/sermons/");
    // cy.get('@post').should('have.property', 'status', 201)

    // Check all 36 Sermons were imported (count pages?)
    cy.contains("Lesson 1");
    cy.get('[data-testid="lesson"]').should("have.value", "Lesson 1");

    // Viewing the sermons
    // cy.get('[data-testid="messageText"]').type("New message");
  });

  it("Checking is formatted properly", () => {
    // Map through nodes
    // count the amount of '\' in each node. more than 0 is fail.
    // Signify nodes containing '\'
  });

  it("Clicking Next Lesson Button"),
    () => {
      // // Clicking a send button
      // cy.get('[data-testid="sendButton"]').click();
    };
});
