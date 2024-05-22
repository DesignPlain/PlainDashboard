import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_getNodeGroupLaunchTemplate {
  // The ID of the launch template.
  id?: string;

  // Name of the AutoScaling Group.
  name?: string;

  // Kubernetes version.
  version?: string;
}

export function eks_getNodeGroupLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of the launch template.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the AutoScaling Group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Kubernetes version.",
      [],
      true,
      false,
    ),
  ];
}
