import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Deploymentmanager_DeploymentTargetImport,
  Deploymentmanager_DeploymentTargetImport_GetTypes,
} from "./Deploymentmanager_DeploymentTargetImport";
import {
  Deploymentmanager_DeploymentTargetConfig,
  Deploymentmanager_DeploymentTargetConfig_GetTypes,
} from "./Deploymentmanager_DeploymentTargetConfig";

export interface Deploymentmanager_DeploymentTarget {
  /*
The root configuration file to use for this deployment.
Structure is documented below.
*/
  Config?: Deploymentmanager_DeploymentTargetConfig;

  /*
Specifies import files for this configuration. This can be
used to import templates or other files. For example, you might
import a text file in order to use the file in a template.
Structure is documented below.
*/
  Imports?: Array<Deploymentmanager_DeploymentTargetImport>;
}

export function Deploymentmanager_DeploymentTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "The root configuration file to use for this deployment.\nStructure is documented below.",
      Deploymentmanager_DeploymentTargetConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Imports",
      "Specifies import files for this configuration. This can be\nused to import templates or other files. For example, you might\nimport a text file in order to use the file in a template.\nStructure is documented below.",
      Deploymentmanager_DeploymentTargetImport_GetTypes(),
      false,
      false,
    ),
  ];
}
