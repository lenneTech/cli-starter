import { UpdateHelper } from './../extensions/updateHelper';
import { MyFirstExtension } from './../extensions/cli-extension';
import { IHelperExtendedGluegunToolbox } from '@lenne.tech/cli-helper/src';

/**
 * Extended GluegunToolbox
 */
export interface ExtendedGluegunToolbox extends IHelperExtendedGluegunToolbox {
  firstExtension: MyFirstExtension;
  updateHelper: UpdateHelper;
  // add more extensions
}
