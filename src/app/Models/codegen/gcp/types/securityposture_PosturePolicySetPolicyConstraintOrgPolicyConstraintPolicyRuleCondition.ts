import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition {
  // Description of the expression
  description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  // String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  location?: string;

  // Title for the expression, i.e. a short string describing its purpose.
  title?: string;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the expression',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'expression',
      'Textual representation of an expression in Common Expression Language syntax.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'String indicating the location of the expression for error reporting, e.g. a file name and a position in the file',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'title',
      'Title for the expression, i.e. a short string describing its purpose.',
      () => [],
      false,
      false,
    ),
  ];
}
