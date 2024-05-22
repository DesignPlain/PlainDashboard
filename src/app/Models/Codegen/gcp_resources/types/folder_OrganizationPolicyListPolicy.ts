import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  folder_OrganizationPolicyListPolicyAllow,
  folder_OrganizationPolicyListPolicyAllow_GetTypes,
} from "./folder_OrganizationPolicyListPolicyAllow";
import {
  folder_OrganizationPolicyListPolicyDeny,
  folder_OrganizationPolicyListPolicyDeny_GetTypes,
} from "./folder_OrganizationPolicyListPolicyDeny";

export interface folder_OrganizationPolicyListPolicy {
  // One or the other must be set.
  deny?: folder_OrganizationPolicyListPolicyDeny;

  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  inheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  suggestedValue?: string;

  // or `deny` - (Optional) One or the other must be set.
  allow?: folder_OrganizationPolicyListPolicyAllow;
}

export function folder_OrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "deny",
      "One or the other must be set.",
      folder_OrganizationPolicyListPolicyDeny_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "or `deny` - (Optional) One or the other must be set.",
      folder_OrganizationPolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
  ];
}
