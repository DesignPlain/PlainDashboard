import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_AccessBoundaryPolicyRuleAccessBoundaryRule,
  Iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes,
} from "./Iam_AccessBoundaryPolicyRuleAccessBoundaryRule";

export interface Iam_AccessBoundaryPolicyRule {
  /*
An access boundary rule in an IAM policy.
Structure is documented below.
*/
  AccessBoundaryRule?: Iam_AccessBoundaryPolicyRuleAccessBoundaryRule;

  // The description of the rule.
  Description?: string;
}

export function Iam_AccessBoundaryPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AccessBoundaryRule",
      "An access boundary rule in an IAM policy.\nStructure is documented below.",
      Iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description of the rule.",
      [],
      false,
      false,
    ),
  ];
}
