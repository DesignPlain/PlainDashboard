import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  deploymentmanager_DeploymentTargetConfig,
  deploymentmanager_DeploymentTargetConfig_GetTypes,
} from "./deploymentmanager_DeploymentTargetConfig";
import {
  deploymentmanager_DeploymentTargetImport,
  deploymentmanager_DeploymentTargetImport_GetTypes,
} from "./deploymentmanager_DeploymentTargetImport";

export interface deploymentmanager_DeploymentTarget {
  /*
The root configuration file to use for this deployment.
Structure is documented below.
*/
  config?: deploymentmanager_DeploymentTargetConfig;

  /*
Specifies import files for this configuration. This can be
used to import templates or other files. For example, you might
import a text file in order to use the file in a template.
Structure is documented below.
*/
  imports?: Array<deploymentmanager_DeploymentTargetImport>;
}

export function deploymentmanager_DeploymentTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "config",
      "The root configuration file to use for this deployment.\nStructure is documented below.",
      deploymentmanager_DeploymentTargetConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "imports",
      "Specifies import files for this configuration. This can be\nused to import templates or other files. For example, you might\nimport a text file in order to use the file in a template.\nStructure is documented below.",
      deploymentmanager_DeploymentTargetImport_GetTypes(),
      false,
      false,
    ),
  ];
}
