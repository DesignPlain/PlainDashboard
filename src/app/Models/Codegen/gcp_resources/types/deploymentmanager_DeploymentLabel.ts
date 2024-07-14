import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface deploymentmanager_DeploymentLabel {
  // Key for label.
  key?: string;

  // Value of label.
  value?: string;
}

export function deploymentmanager_DeploymentLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of label.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for label.",
      [],
      false,
      false,
    ),
  ];
}
