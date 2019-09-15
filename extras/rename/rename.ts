const { build } = require('gluegun')

// Async run function
async function run(argv) {
  // Create a CLI runtime
  const cli = build()
    .brand('rename')
    .src(__dirname)
    // .plugins('./node_modules', { matching: 'cli-starter-*', hidden: true })
    .plugin('./node_modules/@lenne.tech/cli-plugin-helper/dist', {
      extensionFilePattern: '*.js',
      commandFilePattern: '*.js'
    })
    .create()

  // Run cli
  await cli.run(argv)
}

// Run
run(process.argv)
