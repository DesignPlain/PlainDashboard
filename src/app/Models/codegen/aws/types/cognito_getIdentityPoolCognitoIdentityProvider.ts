import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getIdentityPoolCognitoIdentityProvider {
  //
  clientId?: string;

  //
  providerName?: string;

  //
  serverSideTokenCheck?: boolean;
}

export function cognito_getIdentityPoolCognitoIdentityProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'providerName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'serverSideTokenCheck',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'clientId', '', () => [], true, false),
  ];
}
