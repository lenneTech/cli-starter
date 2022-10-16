# CLI Starter

A CLI Starter for your next [Gluegun](https://infinitered.github.io/gluegun/#/) CLI project.

![Gluegun Menu Demo](assets/demo.gif)

[![License](https://img.shields.io/github/license/lenneTech/cli-starter)](/LICENSE) [![CircleCI](https://circleci.com/gh/lenneTech/cli-starter/tree/master.svg?style=shield)](https://circleci.com/gh/lenneTech/cli-starter/tree/master)
[![Dependency Status](https://david-dm.org/lenneTech/cli-starter.svg)](https://david-dm.org/lenneTech/cli-starter) [![devDependency Status](https://david-dm.org/lenneTech/cli-starter/dev-status.svg)](https://david-dm.org/lenneTech/cli-starter?type=dev)

<!--
[![GitHub forks](https://img.shields.io/github/forks/lenneTech/cli-starter)](https://github.com/lenneTech/cli-starter/fork) [![GitHub stars](https://img.shields.io/github/stars/lenneTech/cli-starter)](https://github.com/lenneTech/cli-starter)
-->

## Initialize CLI

Via lenne.Tech CLI:

```shell
$ npm install -g @lenne.tech/cli
$ lt cli create <CLI_NAME>
```

Via GitHub:

```shell
$ git clone https://github.com/lenneTech/cli-starter.git <CLI_NAME>
$ cd <CLI_NAME>
$ npm i
$ npm run rename <CLI_NAME>
```

Via ZIP:

1. Download Starter: https://github.com/lenneTech/cli-starter/archive/master.zip
2. Unpack ZIP
3. Run `npm i && npm run rename <CLI_NAME>` in project directory

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
(if you are publish a public package for the first time: npm publish --access public)
```

# License

MIT - see LICENSE
