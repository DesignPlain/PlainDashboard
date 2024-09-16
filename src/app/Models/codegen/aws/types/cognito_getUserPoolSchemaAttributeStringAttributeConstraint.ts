import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolSchemaAttributeStringAttributeConstraint {
  // - Maximum allowed length.
  maxLength?: string;

  // - Minimum allowed length.
  minLength?: string;
}

export function cognito_getUserPoolSchemaAttributeStringAttributeConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maxLength',
      '- Maximum allowed length.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'minLength',
      '- Minimum allowed length.',
      () => [],
      true,
      false,
    ),
  ];
}
