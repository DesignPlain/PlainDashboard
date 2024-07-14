import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  folder_getOrganizationPolicyListPolicyAllow,
  folder_getOrganizationPolicyListPolicyAllow_GetTypes,
} from "./folder_getOrganizationPolicyListPolicyAllow";
import {
  folder_getOrganizationPolicyListPolicyDeny,
  folder_getOrganizationPolicyListPolicyDeny_GetTypes,
} from "./folder_getOrganizationPolicyListPolicyDeny";

export interface folder_getOrganizationPolicyListPolicy {
  // One or the other must be set.
  allows?: Array<folder_getOrganizationPolicyListPolicyAllow>;

  // One or the other must be set.
  denies?: Array<folder_getOrganizationPolicyListPolicyDeny>;

  // If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  inheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  suggestedValue?: string;
}

export function folder_getOrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allows",
      "One or the other must be set.",
      folder_getOrganizationPolicyListPolicyAllow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "denies",
      "One or the other must be set.",
      folder_getOrganizationPolicyListPolicyDeny_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "inheritFromParent",
      "If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suggestedValue",
      "The Google Cloud Console will try to default to a configuration that matches the value specified in this field.",
      [],
      true,
      false,
    ),
  ];
}
