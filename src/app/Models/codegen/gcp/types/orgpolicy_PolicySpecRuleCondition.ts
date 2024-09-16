import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface orgpolicy_PolicySpecRuleCondition {
  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  // Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  location?: string;

  // Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  title?: string;

  // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  description?: string;
}

export function orgpolicy_PolicySpecRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'expression',
      'Textual representation of an expression in Common Expression Language syntax.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'title',
      'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      () => [],
      false,
      false,
    ),
  ];
}
