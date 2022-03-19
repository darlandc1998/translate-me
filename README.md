# TranslateMe

Personal project to practice APIS with typescript

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

## Install all dependencies

Use the package manager [yarn](https://yarnpkg.com/) to install dependencies.

```bash
yarn add
```

## Run mode development

```bash
yarn dev
```

## Run mode production

```bash
yarn build
```

## API Documentation Example
This API uses `POST` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.

#### API Routes

Function | Type Method | Path | Body | Response
--- | --- | --- | --- | ---
Get all languages | GET | ```${base_url}```/languages | No  | ```[{"code":"auto","name":"Automatic"},{"code":"af","name":"Afrikaans"}...]```
Translate a text | POST | ```${base_url}```/translate | ```{ "text": "Carro", "from?": "pt-BR", "to": "en"}``` | "Car"

* The body attributes without ```?``` end are required

## License
[MIT](https://choosealicense.com/licenses/mit/)
