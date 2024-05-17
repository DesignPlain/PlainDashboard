import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Deploymentmanager_DeploymentLabel {
  // Key for label.
  Key?: string;

  // Value of label.
  Value?: string;
}

export function Deploymentmanager_DeploymentLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for label.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value of label.",
      [],
      false,
      false,
    ),
  ];
}
