beforeEach(() => {
  cy.visit("/");
  cy.get(".ml-auto > .ml-2").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.get("#pass").type("123");
  cy.get("form > .ml-2").click();
});

it("Добавления романа", () => {
  cy.get(".p-0 > .btn").click();
  cy.get("#title").type("Первая книга");
  cy.get("#description").type("Роман");
  cy.get("form > .ml-2").click();
  cy.contains("Первая книга").should("be.visible", true);
});

it("Добавление детектива", () => {
  cy.get(".p-0 > .btn").click();
  cy.get("#title").type("Вторая книга");
  cy.get("#description").type("Детектив");
  cy.get("form > .ml-2").click();
  cy.contains("Вторая книга").should("be.visible", true);
});

it("Добавление учебной литературы", () => {
  cy.get(".p-0 > .btn").click();
  cy.get("#title").type("Химия 7 класс");
  cy.get("#description").type("Учебник");
  cy.get("form > .ml-2").click();
  cy.contains("Химия 7 класс").should("be.visible", true);
});
