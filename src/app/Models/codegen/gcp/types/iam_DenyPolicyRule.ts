import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iam_DenyPolicyRuleDenyRule,
  iam_DenyPolicyRuleDenyRule_GetTypes,
} from './iam_DenyPolicyRuleDenyRule';

export interface iam_DenyPolicyRule {
  // The description of the rule.
  description?: string;

  /*
A deny rule in an IAM deny policy.
Structure is documented below.
*/
  denyRule?: iam_DenyPolicyRuleDenyRule;
}

export function iam_DenyPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the rule.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'denyRule',
      'A deny rule in an IAM deny policy.\nStructure is documented below.',
      () => iam_DenyPolicyRuleDenyRule_GetTypes(),
      false,
      false,
    ),
  ];
}
