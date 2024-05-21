import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iam_DenyPolicyRuleDenyRule,
  iam_DenyPolicyRuleDenyRule_GetTypes,
} from "./iam_DenyPolicyRuleDenyRule";

export interface iam_DenyPolicyRule {
  /*
A deny rule in an IAM deny policy.
Structure is documented below.
*/
  denyRule?: iam_DenyPolicyRuleDenyRule;

  // The description of the rule.
  description?: string;
}

export function iam_DenyPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "denyRule",
      "A deny rule in an IAM deny policy.\nStructure is documented below.",
      iam_DenyPolicyRuleDenyRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the rule.",
      [],
      false,
      false,
    ),
  ];
}
