import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Folder_OrganizationPolicyListPolicyDeny {
  // The policy allows or denies all values.
  All?: boolean;

  // The policy can define specific values that are allowed or denied.
  Values?: Array<string>;
}

export function Folder_OrganizationPolicyListPolicyDeny_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "All",
      "The policy allows or denies all values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "The policy can define specific values that are allowed or denied.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
