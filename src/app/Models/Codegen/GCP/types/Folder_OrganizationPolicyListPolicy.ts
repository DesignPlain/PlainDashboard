import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Folder_OrganizationPolicyListPolicyAllow,
  Folder_OrganizationPolicyListPolicyAllow_GetTypes,
} from "./Folder_OrganizationPolicyListPolicyAllow";
import {
  Folder_OrganizationPolicyListPolicyDeny,
  Folder_OrganizationPolicyListPolicyDeny_GetTypes,
} from "./Folder_OrganizationPolicyListPolicyDeny";

export interface Folder_OrganizationPolicyListPolicy {
  // or `deny` - (Optional) One or the other must be set.
  Allow?: Folder_OrganizationPolicyListPolicyAllow;

  // One or the other must be set.
  Deny?: Folder_OrganizationPolicyListPolicyDeny;

  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;
}

export function Folder_OrganizationPolicyListPolicy_GetTypes(): DynamicUIProps[] {
  return [
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
      Folder_OrganizationPolicyListPolicyAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Deny",
      "One or the other must be set.",
      Folder_OrganizationPolicyListPolicyDeny_GetTypes(),
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
  ];
}
