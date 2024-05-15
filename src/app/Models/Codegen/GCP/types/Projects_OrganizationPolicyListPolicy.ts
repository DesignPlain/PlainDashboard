import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_OrganizationPolicyListPolicyDeny,
  Projects_OrganizationPolicyListPolicyDeny_GetTypes,
} from "./Projects_OrganizationPolicyListPolicyDeny";
import {
  Projects_OrganizationPolicyListPolicyAllow,
  Projects_OrganizationPolicyListPolicyAllow_GetTypes,
} from "./Projects_OrganizationPolicyListPolicyAllow";

export interface Projects_OrganizationPolicyListPolicy {
  // One or the other must be set.
  Deny?: Projects_OrganizationPolicyListPolicyDeny;

  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;

  // or `deny` - (Optional) One or the other must be set.
  Allow?: Projects_OrganizationPolicyListPolicyAllow;
}

export function Projects_OrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Allow",
      "or `deny` - (Optional) One or the other must be set.",
      Projects_OrganizationPolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Deny",
      "One or the other must be set.",
      Projects_OrganizationPolicyListPolicyDeny_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InheritFromParent",
      "If set to true, the values from the effective Policy of the parent resource\nare inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.\n\nThe `allow` or `deny` blocks support:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SuggestedValue",
      "The Google Cloud Console will try to default to a configuration that matches the value specified in this field.",
      [],
      false,
      false,
    ),
  ];
}
