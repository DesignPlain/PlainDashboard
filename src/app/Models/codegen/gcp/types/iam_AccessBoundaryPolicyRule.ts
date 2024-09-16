import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iam_AccessBoundaryPolicyRuleAccessBoundaryRule,
  iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes,
} from './iam_AccessBoundaryPolicyRuleAccessBoundaryRule';

export interface iam_AccessBoundaryPolicyRule {
  /*
An access boundary rule in an IAM policy.
Structure is documented below.
*/
  accessBoundaryRule?: iam_AccessBoundaryPolicyRuleAccessBoundaryRule;

  // The description of the rule.
  description?: string;
}

export function iam_AccessBoundaryPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'accessBoundaryRule',
      'An access boundary rule in an IAM policy.\nStructure is documented below.',
      () => iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the rule.',
      () => [],
      false,
      false,
    ),
  ];
}
