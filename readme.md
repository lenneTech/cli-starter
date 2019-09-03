# cli-starter CLI

A CLI for cli-starter.

# RENAMING CLI TO YOUR NAME

Files:
./bin/cli-starter                       => RENAME FILE TO PREFIX
./__tests__/cli-integration.test.ts:6   => RENAME TO PREFIX
./src/cli.ts:10                         => RENAME TO PREFIX
./src/commands/cli-starter.ts           => RENAME FILE TO PREFIX
./src/commands/cli-starter.ts:7         => RENAME TO PREFIX
./src/commands/cli-starter.ts:16        => RENAME TO PREFIX
./package.json:14                       => RENAME TO PREFIX

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
