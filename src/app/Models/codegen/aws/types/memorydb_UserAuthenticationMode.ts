import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface memorydb_UserAuthenticationMode {
  // Number of passwords belonging to the user if `type` is set to `password`.
  passwordCount?: number;

  // Set of passwords used for authentication if `type` is set to `password`. You can create up to two passwords for each user.
  passwords?: Array<string>;

  // Specifies the authentication type. Valid values are: `password` or `iam`.
  type?: string;
}

export function memorydb_UserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'passwordCount',
      'Number of passwords belonging to the user if `type` is set to `password`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'passwords',
      'Set of passwords used for authentication if `type` is set to `password`. You can create up to two passwords for each user.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Specifies the authentication type. Valid values are: `password` or `iam`.',
      () => [],
      true,
      false,
    ),
  ];
}
