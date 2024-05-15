import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesPackageRepositoryGoo {
  // The name of the repository.
  Name?: string;

  // The url of the repository.
  Url?: string;
}

export function Osconfig_GuestPoliciesPackageRepositoryGoo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The url of the repository.",
      [],
      true,
      false,
    ),
  ];
}
