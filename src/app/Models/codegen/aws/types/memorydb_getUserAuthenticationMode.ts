import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface memorydb_getUserAuthenticationMode {
  // Number of passwords belonging to the user if `type` is set to `password`.
  passwordCount?: number;

  // Type of authentication configured.
  type?: string;
}

export function memorydb_getUserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of authentication configured.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'passwordCount',
      'Number of passwords belonging to the user if `type` is set to `password`.',
      () => [],
      true,
      false,
    ),
  ];
}
