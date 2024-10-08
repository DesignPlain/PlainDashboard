import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork {
  //
  expirationTime?: string;

  //
  name?: string;

  //
  value?: string;
}

export function sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'expirationTime',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'value', '', () => [], true, false),
  ];
}
