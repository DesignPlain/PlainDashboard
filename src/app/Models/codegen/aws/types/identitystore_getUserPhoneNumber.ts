import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identitystore_getUserPhoneNumber {
  // When `true`, this is the primary phone number associated with the user.
  primary?: boolean;

  // The type of phone number.
  type?: string;

  // The user's phone number.
  value?: string;
}

export function identitystore_getUserPhoneNumber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of phone number.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      "The user's phone number.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'primary',
      'When `true`, this is the primary phone number associated with the user.',
      () => [],
      true,
      false,
    ),
  ];
}
