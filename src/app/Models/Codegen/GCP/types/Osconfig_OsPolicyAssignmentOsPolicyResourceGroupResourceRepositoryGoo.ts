import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo {
  // The url of the repository.
  url?: string;

  // The name of the repository.
  name?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The url of the repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the repository.",
      [],
      true,
      false,
    ),
  ];
}
