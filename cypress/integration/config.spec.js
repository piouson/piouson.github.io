const config = require("../../config");

describe("App Config", () => {
  before(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Page Title", () => {
    cy.title().should("eq", config.pageTitle);
  });

  it("Brand Name", () => {
    cy.get("#brand-name h1")
      .should("have.text", config.brandName.toUpperCase());
  });

  it("Copyright", () => {
    cy.get(".copyright p").invoke("text").then(($copyright) => {
      expect($copyright).to.include(config.copyrightYear);
      expect($copyright).to.include(config.copyrightName.toLowerCase());
    });
  });
});
