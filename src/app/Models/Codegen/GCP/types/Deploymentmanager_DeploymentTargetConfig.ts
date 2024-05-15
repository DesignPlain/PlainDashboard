import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Deploymentmanager_DeploymentTargetConfig {
  // The full YAML contents of your configuration file.
  Content?: string;
}

export function Deploymentmanager_DeploymentTargetConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Content",
      "The full YAML contents of your configuration file.",
      [],
      true,
      false,
    ),
  ];
}
