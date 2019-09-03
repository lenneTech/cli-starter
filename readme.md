# cli-starter CLI

A CLI for cli-starter.

# Renaming CLI to your name

run:
```shell
$ ./renaming-cli.sh <Your CLI Prefix>
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
```

# License

MIT - see LICENSE
