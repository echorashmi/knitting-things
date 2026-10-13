# knitting-things

This project is now configured as a Node.js app that serves the existing static site via Express, so it can be deployed directly to Heroku.

## Run locally

```bash
npm install
npm start
```

The app will run on `http://localhost:3000` by default.

## Deploy to Heroku

1. Create a Heroku app:

   ```bash
   heroku create <your-app-name>
   ```

2. Push this branch to Heroku:

   ```bash
   git push heroku cursor/heroku-node-js-application-05da:main
   ```

3. Open the deployed app:

   ```bash
   heroku open
   ```

Heroku will detect `package.json`, install dependencies, and run the web process from `Procfile`.
## Ravelry API

`scripts/ravelry.js` is a small, dependency-free client for the [Ravelry API](https://www.ravelry.com/api).
It reads your API key pair from the environment (never commit these):

- `RAVELRY_USERNAME` – the username of your Ravelry API key
- `RAVELRY_PASSWORD` – the password (key) of your Ravelry API key

```bash
npm run ravelry -- me                       # check credentials
npm run ravelry -- patterns "cabled hat"    # search patterns
npm run ravelry -- pattern 12345            # pattern details
npm run ravelry -- yarns "merino worsted"   # search yarns
npm run ravelry -- yarn 678                 # yarn details
npm run ravelry -- get /stores/list.json    # any other endpoint
```

It can also be used from code: `const ravelry = require("./scripts/ravelry");`.
