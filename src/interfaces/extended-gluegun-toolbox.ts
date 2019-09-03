import { MyFirstExtension } from './../extensions/cli-extension';
import { IHelperExtendedGluegunToolbox } from '@lenne.tech/cli-helper/src';

/**
 * Extended GluegunToolbox
 */
export interface ExtendedGluegunToolbox extends IHelperExtendedGluegunToolbox {
  firstExtension: MyFirstExtension;
  // add more extensions
}
