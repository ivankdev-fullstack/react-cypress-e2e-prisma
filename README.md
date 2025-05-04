## About

React application based on Cypress e2e tests to operate with basic user auth and creating `takeaways`.

### Technical Stack

- **TypeScript:** A strongly-typed programming language that builds on JavaScript, adding static typing and enhanced development tools.

- **React**: A JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to build reusable UI components and manage the state of their application efficiently.

- **Cypress**: A fast, reliable testing framework for web applications that allows for end-to-end testing, integration testing, and unit testing with an easy-to-use API.

- **Remix.js**: A modern web framework built on React that focuses on providing a better developer experience and optimized performance by leveraging server-side rendering and data fetching techniques.

- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs without writing CSS. Version 4 introduces enhanced utility classes and further customization options for responsive, modern web design.

- **Prisma**: An open-source ORM (Object-Relational Mapping) tool for Node.js and TypeScript that simplifies database access and management by generating type-safe queries and supporting multiple database systems.

## Fill up the envs

For backend (.env - development, .env.test - testing):

```bash
DATABASE_URL= # or path to the `.db` file
SESSION_SECRET=
```

## Run app

Init project and seed database:

```bash
npm run init
```

Run the application:

```bash
npm run dev
```

Run Cypress tests:

```bash
npm run test:open
```
