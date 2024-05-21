import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_PolicyListPolicyAllow,
  organizations_PolicyListPolicyAllow_GetTypes,
} from "./organizations_PolicyListPolicyAllow";
import {
  organizations_PolicyListPolicyDeny,
  organizations_PolicyListPolicyDeny_GetTypes,
} from "./organizations_PolicyListPolicyDeny";

export interface organizations_PolicyListPolicy {
  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  inheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  suggestedValue?: string;

  // or `deny` - (Optional) One or the other must be set.
  allow?: organizations_PolicyListPolicyAllow;

  // One or the other must be set.
  deny?: organizations_PolicyListPolicyDeny;
}

export function organizations_PolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
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
      organizations_PolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deny",
      "One or the other must be set.",
      organizations_PolicyListPolicyDeny_GetTypes(),
      false,
      false,
    ),
  ];
}
