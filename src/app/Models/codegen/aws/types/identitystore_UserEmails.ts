import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identitystore_UserEmails {
  // When `true`, this is the primary email associated with the user.
  primary?: boolean;

  // The type of email.
  type?: string;

  // The email address. This value must be unique across the identity store.
  value?: string;
}

export function identitystore_UserEmails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'primary',
      'When `true`, this is the primary email associated with the user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of email.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The email address. This value must be unique across the identity store.',
      () => [],
      false,
      false,
    ),
  ];
}
