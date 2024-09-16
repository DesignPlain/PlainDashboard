import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53recoverycontrol_SafetyRuleRuleConfig {
  // Logical negation of the rule.
  inverted?: boolean;

  // Number of controls that must be set when you specify an `ATLEAST` type rule.
  threshold?: number;

  // Rule type. Valid values are `ATLEAST`, `AND`, and `OR`.
  type?: string;
}

export function route53recoverycontrol_SafetyRuleRuleConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'inverted',
      'Logical negation of the rule.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'threshold',
      'Number of controls that must be set when you specify an `ATLEAST` type rule.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Rule type. Valid values are `ATLEAST`, `AND`, and `OR`.',
      () => [],
      true,
      false,
    ),
  ];
}
