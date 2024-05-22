import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper {
  // Package name.
  name?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Package name.",
      [],
      true,
      false,
    ),
  ];
}
