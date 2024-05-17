import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_PolicyListPolicyAllow,
  Organizations_PolicyListPolicyAllow_GetTypes,
} from "./Organizations_PolicyListPolicyAllow";
import {
  Organizations_PolicyListPolicyDeny,
  Organizations_PolicyListPolicyDeny_GetTypes,
} from "./Organizations_PolicyListPolicyDeny";

export interface Organizations_PolicyListPolicy {
  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;

  // or `deny` - (Optional) One or the other must be set.
  Allow?: Organizations_PolicyListPolicyAllow;

  // One or the other must be set.
  Deny?: Organizations_PolicyListPolicyDeny;
}

export function Organizations_PolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Object,
      "Allow",
      "or `deny` - (Optional) One or the other must be set.",
      Organizations_PolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Deny",
      "One or the other must be set.",
      Organizations_PolicyListPolicyDeny_GetTypes(),
      false,
      false,
    ),
  ];
}
