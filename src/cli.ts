const { build } = require('gluegun')

/**
 * Create the cli and kick it off
 */
async function run(argv) {
  try {
    // Create a CLI runtime
    const cli = build()
      .brand('cli-starter')
      .src(__dirname)
      // .plugins('./node_modules', { matching: 'cli-starter-*', hidden: true })
      .plugin('./node_modules/@lenne.tech/cli-helper/dist', {
        extensionFilePattern: '*.js',
        commandFilePattern: '*.js'
      })
      .help() // provides default for help, h, --help, -h
      .version() // provides default for version, v, --version, -v
      .create()

    // Run cli
    const toolbox = await cli.run(argv)

    // Send it back (for testing, mostly)
    return toolbox
  } catch (e) {
    // Abort via CTRL-C
    if (!e) {
      console.log('Goodbye ✌️')
    } else {
      // Throw error
      throw e
    }
  }
}

module.exports = { run }
