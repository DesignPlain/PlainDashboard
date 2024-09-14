import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface deploymentmanager_DeploymentTargetConfig {
  // The full YAML contents of your configuration file.
  content?: string;
}

export function deploymentmanager_DeploymentTargetConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "The full YAML contents of your configuration file.",
      () => [],
      true,
      false,
    ),
  ];
}
