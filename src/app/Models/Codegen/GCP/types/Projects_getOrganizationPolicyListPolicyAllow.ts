import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Projects_getOrganizationPolicyListPolicyAllow {
  // The policy allows or denies all values.
  All?: boolean;

  // The policy can define specific values that are allowed or denied.
  Values?: Array<string>;
}

export function Projects_getOrganizationPolicyListPolicyAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "All",
      "The policy allows or denies all values.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "The policy can define specific values that are allowed or denied.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
