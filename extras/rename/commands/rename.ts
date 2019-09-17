import { IHelperExtendedGluegunToolbox } from '@lenne.tech/cli-plugin-helper/src/interfaces/extended-gluegun-toolbox.interface'
import { rename as renameOrg } from 'fs'
import { dirname } from 'path'
import { promisify } from 'util'

const rename = promisify(renameOrg)

/**
 * Rename files and data of cli starter
 */
module.exports = {
  name: 'rename',
  description: 'Rename files and data of cli starter',
  hidden: true,
  run: async (toolbox: IHelperExtendedGluegunToolbox) => {
    // Toolbox
    const {
      helper,
      npm,
      parameters: params,
      patching: { patch, update },
      print: { info, spin, success },
      prompt: { ask },
      strings: { kebabCase },
      system: { run, startTimer }
    } = toolbox

    // Get project name
    const name = await helper.getInput(params.first, {
      name: 'Project name',
      showError: true
    })
    if (!name) {
      return
    }

    // Get author
    const author = await helper.getInput(params.options.author, {
      name: 'Author',
      showError: true
    })

    // Link
    let link = params.options.link && !params.options.nolink
    if (!params.options.link && !params.options.nolink) {
      link = !!(await ask({
        type: 'confirm',
        name: 'link',
        message: 'Link when finished?'
      })).link
    }

    // Start timer and spinner
    const timer = startTimer()
    const spinner = spin('Rename files and data')

    // Set up different spellings
    const nameKebab = kebabCase(name) // kebab-case

    // Get package.json
    const { path: packagePath, data: packageData } = await npm.getPackageJson()
    const rootPath = dirname(packagePath)

    // Get original package name
    const packageName = packageData.name.replace(/^.*\//, '')

    // Set data for package.json
    const newPackageData = {
      ...packageData,
      name: nameKebab,
      version: '0.0.1',
      description: name,
      keywords: ['cli'],
      author: author,
      contributors: [author],
      homepage: '',
      repository: {
        type: 'git',
        url: ''
      },
      bugs: {
        url: ''
      },
      bin: {}
    }
    newPackageData.bin[nameKebab] = 'bin/' + nameKebab
    await npm.setPackageJson(newPackageData)
    await patch(rootPath + 'package.json', {
      insert: nameKebab,
      replace: new RegExp(packageName, 'g'),
      force: true
    })

    // Update package-lock.json
    const packageLockPath = rootPath + '/package-lock.json'
    await update(packageLockPath, data => {
      data.name = nameKebab
      data.version = '0.0.1'
      return data
    })

    // Patch tests
    await patch(rootPath + '/__tests__/cli.test.ts', {
      insert: nameKebab,
      replace: new RegExp(packageName, 'g'),
      force: true
    })

    // Rename bin
    await rename(
      rootPath + '/bin/' + packageName,
      rootPath + '/bin/' + nameKebab
    )

    // Patch docs
    await patch(rootPath + '/docs/commands.md', {
      insert: name,
      replace: new RegExp(packageName, 'g'),
      force: true
    })
    await patch(rootPath + '/docs/plugins.md', {
      insert: name,
      replace: new RegExp(packageName, 'g'),
      force: true
    })

    // Patch CLI
    await patch(rootPath + '/src/cli.ts', {
      insert: nameKebab,
      replace: new RegExp(packageName, 'g'),
      force: true
    })

    // Patch and rename commands
    let showCommandsInfo = false
    try {
      await patch(rootPath + '/src/commands/' + packageName + '.ts', {
        insert: nameKebab,
        replace: new RegExp(packageName, 'g'),
        force: true
      })
      await patch(rootPath + '/src/commands/' + packageName + '.ts', {
        insert: name,
        replace: new RegExp('CLI-Starter project', 'g'),
        force: true
      })
      await rename(
        rootPath + '/src/commands/' + packageName + '.ts',
        rootPath + '/src/commands/' + nameKebab + '.ts'
      )
    } catch (e) {
      showCommandsInfo = true
    }

    // Link
    if (link) {
      await run(`cd ${rootPath} && npm run build && npm link`)
    }

    // Success info
    spinner.succeed()
    success(
      `Renamed${link ? ' and linked' : ''} in ${helper.msToMinutesAndSeconds(
        timer()
      )}m.`
    )
    if (showCommandsInfo) {
      info('Commands could not be adjusted!')
    }
    info('Please remember to customize the README.md.')

    return 'rename'
  }
}
