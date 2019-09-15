# CLI Starter

A CLI Starter for your next CLI project.

[![License](https://img.shields.io/github/license/lenneTech/cli-starter)](/LICENSE) [![CircleCI](https://circleci.com/gh/lenneTech/cli-starter/tree/master.svg?style=shield)](https://circleci.com/gh/lenneTech/cli-starter/tree/master)
[![Dependency Status](https://david-dm.org/lenneTech/cli-starter.svg)](https://david-dm.org/lenneTech/cli-starter) [![devDependency Status](https://david-dm.org/lenneTech/cli-starter/dev-status.svg)](https://david-dm.org/lenneTech/cli-starter?type=dev)

<!--
[![GitHub forks](https://img.shields.io/github/forks/lenneTech/cli-starter)](https://github.com/lenneTech/cli-starter/fork) [![GitHub stars](https://img.shields.io/github/stars/lenneTech/cli-starter)](https://github.com/lenneTech/cli-starter)
-->

# Renaming CLI to your name

run:

```shell
$ npm rename <YOUR CLI NAME>
```

If all works, you can remove the .bak files.

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
(if you are publish a plublic package for the first time: npm publish --access public)
```

# License

MIT - see LICENSE
