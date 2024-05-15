import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_DenyPolicyRuleDenyRule,
  Iam_DenyPolicyRuleDenyRule_GetTypes,
} from "./Iam_DenyPolicyRuleDenyRule";

export interface Iam_DenyPolicyRule {
  /*
A deny rule in an IAM deny policy.
Structure is documented below.
*/
  DenyRule?: Iam_DenyPolicyRuleDenyRule;

  // The description of the rule.
  Description?: string;
}

export function Iam_DenyPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DenyRule",
      "A deny rule in an IAM deny policy.\nStructure is documented below.",
      Iam_DenyPolicyRuleDenyRule_GetTypes(),
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
