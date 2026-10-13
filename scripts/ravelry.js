#!/usr/bin/env node
// Minimal Ravelry API client (https://www.ravelry.com/api).
//
// Credentials come from the environment, never from the repo:
//   RAVELRY_USERNAME  the "username" of your Ravelry API key pair
//   RAVELRY_PASSWORD  the "password" (key) of your Ravelry API key pair
//
// Usage:
//   node scripts/ravelry.js me
//   node scripts/ravelry.js patterns "cabled hat" [page]
//   node scripts/ravelry.js pattern <id>
//   node scripts/ravelry.js yarns "merino worsted" [page]
//   node scripts/ravelry.js yarn <id>
//   node scripts/ravelry.js get /path.json [key=value ...]
//
// Behind an HTTPS proxy, Node's built-in fetch needs NODE_USE_ENV_PROXY=1.

const BASE_URL = "https://api.ravelry.com";

function authHeader() {
  const user = process.env.RAVELRY_USERNAME;
  const pass = process.env.RAVELRY_PASSWORD;
  if (!user || !pass) {
    throw new Error("Set RAVELRY_USERNAME and RAVELRY_PASSWORD to your Ravelry API key pair.");
  }
  return "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
}

async function get(path, params = {}) {
  const url = new URL(path, BASE_URL);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  }
  const res = await fetch(url, { headers: { Authorization: authHeader(), Accept: "application/json" } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Ravelry ${res.status} ${res.statusText} for ${url.pathname}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

const currentUser = () => get("/current_user.json");
const searchPatterns = (query, page = 1, pageSize = 20) =>
  get("/patterns/search.json", { query, page, page_size: pageSize });
const getPattern = (id) => get(`/patterns/${id}.json`);
const searchYarns = (query, page = 1, pageSize = 20) =>
  get("/yarns/search.json", { query, page, page_size: pageSize });
const getYarn = (id) => get(`/yarns/${id}.json`);

module.exports = { get, currentUser, searchPatterns, getPattern, searchYarns, getYarn };

async function main(argv) {
  const [command, ...args] = argv;
  switch (command) {
    case "me":
      return currentUser();
    case "patterns":
      return searchPatterns(args[0], args[1]);
    case "pattern":
      return getPattern(args[0]);
    case "yarns":
      return searchYarns(args[0], args[1]);
    case "yarn":
      return getYarn(args[0]);
    case "get":
      return get(args[0], Object.fromEntries(args.slice(1).map((pair) => pair.split("="))));
    default:
      throw new Error("Usage: ravelry.js <me|patterns|pattern|yarns|yarn|get> [args]");
  }
}

if (require.main === module) {
  main(process.argv.slice(2))
    .then((data) => console.log(JSON.stringify(data, null, 2)))
    .catch((err) => {
      console.error(err.cause ? `${err.message} (${err.cause.message || err.cause})` : err.message);
      process.exit(1);
    });
}
