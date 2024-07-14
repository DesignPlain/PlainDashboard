import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  projects_OrganizationPolicyListPolicyDeny,
  projects_OrganizationPolicyListPolicyDeny_GetTypes,
} from "./projects_OrganizationPolicyListPolicyDeny";
import {
  projects_OrganizationPolicyListPolicyAllow,
  projects_OrganizationPolicyListPolicyAllow_GetTypes,
} from "./projects_OrganizationPolicyListPolicyAllow";

export interface projects_OrganizationPolicyListPolicy {
  // or `deny` - (Optional) One or the other must be set.
  allow?: projects_OrganizationPolicyListPolicyAllow;

  // One or the other must be set.
  deny?: projects_OrganizationPolicyListPolicyDeny;

  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  inheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  suggestedValue?: string;
}

export function projects_OrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "or `deny` - (Optional) One or the other must be set.",
      projects_OrganizationPolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deny",
      "One or the other must be set.",
      projects_OrganizationPolicyListPolicyDeny_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "inheritFromParent",
      "If set to true, the values from the effective Policy of the parent resource\nare inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.\n\nThe `allow` or `deny` blocks support:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suggestedValue",
      "The Google Cloud Console will try to default to a configuration that matches the value specified in this field.",
      [],
      false,
      false,
    ),
  ];
}
