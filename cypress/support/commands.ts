/// <reference types="cypress" />

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get('[data-cy="auth-email"]').click();
  cy.get('[data-cy="auth-email"]').type("test@example.com");
  cy.get('[data-cy="auth-password"]').type("testpassword");
  cy.get('[data-cy="auth-submit"]').click();
  cy.location("pathname").should("eq", "/takeaways");
  cy.getCookie("__session").its("value").should("not.be.empty");
});

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Minified React error #418;") ||
    err.message.includes("Minified React error #423;") ||
    err.message.includes("hydrating") ||
    err.message.includes("Hydration")
  ) {
    return false;
  }
});
