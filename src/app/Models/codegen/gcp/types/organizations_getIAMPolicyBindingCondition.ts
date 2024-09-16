import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_getIAMPolicyBindingCondition {
  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  title?: string;

  // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  description?: string;
}

export function organizations_getIAMPolicyBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
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
      'title',
      'A title for the expression, i.e. a short string describing its purpose.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      () => [],
      false,
      false,
    ),
  ];
}
