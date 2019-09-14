import { MyFirstExtension } from '../extensions/my-first-extension'
import { IHelperExtendedGluegunToolbox } from '@lenne.tech/cli-plugin-helper/src'

/**
 * Extended GluegunToolbox
 */
export interface ExtendedGluegunToolbox extends IHelperExtendedGluegunToolbox {
  firstExtension: MyFirstExtension
  // add more extensions
}
