import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dynamodb_TableTtl {
  /*
Name of the table attribute to store the TTL timestamp in.
Required if `enabled` is `true`, must not be set otherwise.
*/
  attributeName?: string;

  /*
Whether TTL is enabled.
Default value is `false`.
*/
  enabled?: boolean;
}

export function dynamodb_TableTtl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether TTL is enabled.\nDefault value is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'attributeName',
      'Name of the table attribute to store the TTL timestamp in.\nRequired if `enabled` is `true`, must not be set otherwise.',
      () => [],
      false,
      false,
    ),
  ];
}
