import { DeploymentTargetConfig } from "./DeploymentTargetConfig";
import { DeploymentTargetImport } from "./DeploymentTargetImport";

export interface DeploymentTarget {
  /*
The root configuration file to use for this deployment.
Structure is documented below.
*/
  Config?: DeploymentTargetConfig;

  /*
Specifies import files for this configuration. This can be
used to import templates or other files. For example, you might
import a text file in order to use the file in a template.
Structure is documented below.
*/
  Imports?: Array<DeploymentTargetImport>;
}
