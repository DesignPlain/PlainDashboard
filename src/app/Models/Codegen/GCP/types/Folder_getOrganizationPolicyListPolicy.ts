import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Folder_getOrganizationPolicyListPolicyAllow,
  Folder_getOrganizationPolicyListPolicyAllow_GetTypes,
} from "./Folder_getOrganizationPolicyListPolicyAllow";
import {
  Folder_getOrganizationPolicyListPolicyDeny,
  Folder_getOrganizationPolicyListPolicyDeny_GetTypes,
} from "./Folder_getOrganizationPolicyListPolicyDeny";

export interface Folder_getOrganizationPolicyListPolicy {
  // One or the other must be set.
  Allows?: Array<Folder_getOrganizationPolicyListPolicyAllow>;

  // One or the other must be set.
  Denies?: Array<Folder_getOrganizationPolicyListPolicyDeny>;

  // If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;
}

export function Folder_getOrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "InheritFromParent",
      "If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SuggestedValue",
      "The Google Cloud Console will try to default to a configuration that matches the value specified in this field.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Allows",
      "One or the other must be set.",
      Folder_getOrganizationPolicyListPolicyAllow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Denies",
      "One or the other must be set.",
      Folder_getOrganizationPolicyListPolicyDeny_GetTypes(),
      true,
      false,
    ),
  ];
}
