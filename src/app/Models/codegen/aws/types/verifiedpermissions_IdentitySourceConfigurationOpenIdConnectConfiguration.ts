import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration,
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration_GetTypes,
} from './verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration';
import {
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection,
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection_GetTypes,
} from './verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection';

export interface verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration {
  // A descriptive string that you want to prefix to user entities from your OIDC identity provider.
  entityIdPrefix?: string;

  // The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source. See Group Configuration below.
  groupConfiguration?: verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration;

  // The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.
  issuer?: string;

  // The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source. See Token Selection below.
  tokenSelection?: verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection;
}

export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'entityIdPrefix',
      'A descriptive string that you want to prefix to user entities from your OIDC identity provider.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'groupConfiguration',
      'The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source. See Group Configuration below.',
      () =>
        verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'issuer',
      'The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tokenSelection',
      'The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source. See Token Selection below.',
      () =>
        verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection_GetTypes(),
      false,
      false,
    ),
  ];
}
