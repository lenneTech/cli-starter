import { ExtendedGluegunToolbox } from '../interfaces/extended-gluegun-toolbox'

/**
 * Welcome to your CLI
 */
module.exports = {
  name: 'cli-starter',
  description: 'Welcome to @lenne.Tech CLI-Starter project!',
  hidden: true,
  run: async (toolbox: ExtendedGluegunToolbox) => {
    const { helper } = toolbox
    await helper.commandSelector(toolbox, {
      level: 0,
      welcome: 'Welcome to @lenne.Tech CLI-Starter project ' + toolbox.meta.version()
    })
    return 'cli-starter'
  }
}
