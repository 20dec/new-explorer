# Forking the Xi Block Explorer
The Xi block explorer should be compatible with many CryptoNote forks.

There may be some Xi-specific rpc features, but legacy fallbacks have been included for compatibility.

## Project Setup
Fork and clone the project.

Install the vue cli tools.
`npm install -g vue-cli```

In the project root directory, run a local dev server with
`npm run dev`

or build for production with
`npm run build`

## Forking
Set coin configuration in `/src/config/coin.config.js`

Point the block explorer at your daemon in `/src/config/api.config.js`

Replace `/src/assets/logo.png` with your logo.
Replace `/public/favicon.ico` with your favicon.
Update the page title in `/public/index.html`.

For the paper wallet, update `/src/scripts/crypto_utils.js` config section for now.

If you don't want any styling changes, you're done.
