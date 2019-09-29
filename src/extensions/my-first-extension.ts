import { ExtendedGluegunToolbox } from './../interfaces/extended-gluegun-toolbox';

/**
 * MyFirstExtension
 */
export class MyFirstExtension {
  /**
   * Constructor for integration of toolbox
   */
  constructor(protected toolbox: ExtendedGluegunToolbox) {}

  /**
   * Run update
   * @param showInfos
   */
  public async runExtension() {
    const {
      print: { success }
    } = this.toolbox;

    success('Your first extension is very nice 👏');
  }
}

/**
 * Extend MyFirstExtension
 */
export default (toolbox: ExtendedGluegunToolbox) => {
  toolbox.myExtension = new MyFirstExtension(toolbox);
};
