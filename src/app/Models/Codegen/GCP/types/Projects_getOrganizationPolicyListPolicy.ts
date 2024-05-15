import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_getOrganizationPolicyListPolicyDeny,
  Projects_getOrganizationPolicyListPolicyDeny_GetTypes,
} from "./Projects_getOrganizationPolicyListPolicyDeny";
import {
  Projects_getOrganizationPolicyListPolicyAllow,
  Projects_getOrganizationPolicyListPolicyAllow_GetTypes,
} from "./Projects_getOrganizationPolicyListPolicyAllow";

export interface Projects_getOrganizationPolicyListPolicy {
  // One or the other must be set.
  Allows?: Array<Projects_getOrganizationPolicyListPolicyAllow>;

  // One or the other must be set.
  Denies?: Array<Projects_getOrganizationPolicyListPolicyDeny>;

  // If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;
}

export function Projects_getOrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
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
      Projects_getOrganizationPolicyListPolicyAllow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Denies",
      "One or the other must be set.",
      Projects_getOrganizationPolicyListPolicyDeny_GetTypes(),
      true,
      false,
    ),
  ];
}
