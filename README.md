HK01 Offsite Test
=================

## Prerequisite

- [node.js 6.9+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com)

## Get started

```bash
# install yarn
npm -g install yarn

# download the required packages
yarn install

# start in development mode
yarn start
```

## Build for production

```bash
# build the files for production
yarn build

# install serve package
yarn global add serve

# run a serve instance for local testing
serve -s build
```
