import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly,
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly_GetTypes,
} from './verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly';
import {
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly,
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly_GetTypes,
} from './verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly';

export interface verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
  // The OIDC configuration for processing access tokens. See Access Token Only below.
  accessTokenOnly?: verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly;

  // The OIDC configuration for processing identity (ID) tokens. See Identity Token Only below.
  identityTokenOnly?: verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly;
}

export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'accessTokenOnly',
      'The OIDC configuration for processing access tokens. See Access Token Only below.',
      () =>
        verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'identityTokenOnly',
      'The OIDC configuration for processing identity (ID) tokens. See Identity Token Only below.',
      () =>
        verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly_GetTypes(),
      false,
      false,
    ),
  ];
}
