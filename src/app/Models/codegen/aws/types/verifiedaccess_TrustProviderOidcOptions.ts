import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_TrustProviderOidcOptions {
  //
  issuer?: string;

  //
  scope?: string;

  //
  tokenEndpoint?: string;

  //
  userInfoEndpoint?: string;

  //
  authorizationEndpoint?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;
}

export function verifiedaccess_TrustProviderOidcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'clientId', '', () => [], false, true),
    new DynamicUIProps(
      InputType.String,
      'clientSecret',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'issuer', '', () => [], false, true),
    new DynamicUIProps(InputType.String, 'scope', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'tokenEndpoint',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'userInfoEndpoint',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'authorizationEndpoint',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
