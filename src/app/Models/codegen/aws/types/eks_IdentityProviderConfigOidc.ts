import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_IdentityProviderConfigOidc {
  // The name of the identity provider config.
  identityProviderConfigName?: string;

  // Issuer URL for the OpenID Connect identity provider.
  issuerUrl?: string;

  // The key value pairs that describe required claims in the identity token.
  requiredClaims?: Map<string, string>;

  // The JWT claim that the provider will use as the username.
  usernameClaim?: string;

  // A prefix that is prepended to username claims.
  usernamePrefix?: string;

  // Client ID for the OpenID Connect identity provider.
  clientId?: string;

  // The JWT claim that the provider will use to return groups.
  groupsClaim?: string;

  // A prefix that is prepended to group claims e.g., `oidc:`.
  groupsPrefix?: string;
}

export function eks_IdentityProviderConfigOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'groupsPrefix',
      'A prefix that is prepended to group claims e.g., `oidc:`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'identityProviderConfigName',
      'The name of the identity provider config.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'issuerUrl',
      'Issuer URL for the OpenID Connect identity provider.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'requiredClaims',
      'The key value pairs that describe required claims in the identity token.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'usernameClaim',
      'The JWT claim that the provider will use as the username.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'usernamePrefix',
      'A prefix that is prepended to username claims.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'Client ID for the OpenID Connect identity provider.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'groupsClaim',
      'The JWT claim that the provider will use to return groups.',
      () => [],
      false,
      true,
    ),
  ];
}
