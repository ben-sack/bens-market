# [BENS.MARKET](https://bens.market)

[![Netlify Status](https://api.netlify.com/api/v1/badges/99a4ec17-13cf-4237-a5dc-4d8d96fa759d/deploy-status)](https://app.netlify.com/sites/bens-market/deploys)

## Dev

```
npm install
npm run dev
```

Video assets are stored in Git LFS. To pull them locally:

```
git lfs install
git lfs pull
```

## Legacy reference

The original compiled/bundled site (pre-source-rebuild) is preserved in git at commit `ba80bce`.
To inspect a specific bundle from the original build:

```
git show ba80bce:_next/static/chunks/pages/index-4456358371833828.js
```

To list all files from that snapshot:

```
git ls-tree -r --name-only ba80bce
```
