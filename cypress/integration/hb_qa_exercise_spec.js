describe("Hello Build interview exercise", () => {

    describe("Search for something that does exist on google", () => {
        it("Visit Google", () => {
            cy.visit("https://www.google.com/");
        });
        it("Search something in google", () => {
            cy.get(".gLFyf").type("hola{enter}");
        });
        it("Make sure that the number of results and time to get those results are there", () => {
            cy.get("#result-stats")
                .invoke("text")
                .should("contain", "Cerca de")
                .should("contain", "resultados")
                .should("contain", "segundos");
        });
    });

    describe("Search for something that doesn't exist on google", () => {
        it("Visit Google", () => {
            cy.visit("https://www.google.com/");
        });
        it("Search something that doesn't exist in google", () => {
            cy.get(".gLFyf").type(
                "asdjakfjhsaldkfhlaksjdhflashdflka{enter}"
            );
        });
        it("Make sure that the page displays an error when the search give no results", () => {
            cy.get(".eqAnXb p")
                .invoke("text")
                .should("contain", "No se han encontrado resultados para tu búsqueda");
        });
    });
});