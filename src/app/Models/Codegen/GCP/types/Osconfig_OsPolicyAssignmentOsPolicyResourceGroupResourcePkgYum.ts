import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum {
  // Package name.
  Name?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Package name.",
      [],
      true,
      false,
    ),
  ];
}
