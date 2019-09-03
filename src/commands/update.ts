import { ExtendedGluegunToolbox } from '../interfaces/extended-gluegun-toolbox'
import { GluegunCommand } from 'gluegun'

/**
 * Update your CLI
 */
const NewCommand: GluegunCommand = {
  name: 'update',
  alias: ['up'],
  description: 'Update your CLI',
  hidden: false,
  run: async (toolbox: ExtendedGluegunToolbox) => {
    // Retrieve the tools we need
    const { updateHelper } = toolbox

    await updateHelper.runUpdate()

    // For tests
    return `updated @lenne.tech/cli`
  }
}

export default NewCommand
