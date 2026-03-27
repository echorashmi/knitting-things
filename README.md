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