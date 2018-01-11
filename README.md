Simple GraphQL implementation by creating queries which extend and fulfill records stored in JSON server. Records could be retreived, deleted and updated with Axios.

SETUP :

1. Clone the repo.

2. cd into project.

3. Do `npm install`.

4. Open two commands prompts/shells. Do npm start to start the server, and be sure to `npm install nodemon -g` for easier developing and live reloading. The page will be available on localhost:4000.

5. In the second one, do `npm run json:server` to start the json server. It will be available on localhost:3000.

6. On `http://localhost:4000/graphql`, you will see GraphiQL interface, where you can experiment with different methods, like addCustomer, editCustomer and deleteCustomer.