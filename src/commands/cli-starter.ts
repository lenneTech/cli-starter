import { ExtendedGluegunToolbox } from '../interfaces/extended-gluegun-toolbox';

/**
 * Welcome to your CLI
 */
module.exports = {
  name: 'cli-starter',
  description: 'Welcome to CLI-Starter project!',
  hidden: true,
  run: async (toolbox: ExtendedGluegunToolbox) => {
    await toolbox.helper.showMenu(null, {
      headline: 'Welcome to CLI-Starter project ' + toolbox.meta.version()
    });
    return 'cli-starter';
  }
};
