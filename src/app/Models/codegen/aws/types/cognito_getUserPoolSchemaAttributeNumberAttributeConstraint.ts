import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolSchemaAttributeNumberAttributeConstraint {
  // - Minimum allowed value.
  minValue?: string;

  // - Maximum allowed value.
  maxValue?: string;
}

export function cognito_getUserPoolSchemaAttributeNumberAttributeConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'minValue',
      '- Minimum allowed value.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxValue',
      '- Maximum allowed value.',
      () => [],
      true,
      false,
    ),
  ];
}
