import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_ListenerDefaultActionAuthenticateOidc {
  // Authorization endpoint of the IdP.
  authorizationEndpoint?: string;

  // OAuth 2.0 client secret.
  clientSecret?: string;

  // OIDC issuer identifier of the IdP.
  issuer?: string;

  // Set of user claims to be requested from the IdP.
  scope?: string;

  // Name of the cookie used to maintain session information.
  sessionCookieName?: string;

  // Maximum duration of the authentication session, in seconds.
  sessionTimeout?: number;

  /*
User info endpoint of the IdP.

The following arguments are optional:
*/
  userInfoEndpoint?: string;

  // Query parameters to include in the redirect request to the authorization endpoint. Max: 10.
  authenticationRequestExtraParams?: Map<string, string>;

  // OAuth 2.0 client identifier.
  clientId?: string;

  // Behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`
  onUnauthenticatedRequest?: string;

  // Token endpoint of the IdP.
  tokenEndpoint?: string;
}

export function alb_ListenerDefaultActionAuthenticateOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'OAuth 2.0 client identifier.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onUnauthenticatedRequest',
      'Behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientSecret',
      'OAuth 2.0 client secret.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'issuer',
      'OIDC issuer identifier of the IdP.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scope',
      'Set of user claims to be requested from the IdP.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sessionCookieName',
      'Name of the cookie used to maintain session information.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userInfoEndpoint',
      'User info endpoint of the IdP.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authorizationEndpoint',
      'Authorization endpoint of the IdP.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sessionTimeout',
      'Maximum duration of the authentication session, in seconds.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'authenticationRequestExtraParams',
      'Query parameters to include in the redirect request to the authorization endpoint. Max: 10.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tokenEndpoint',
      'Token endpoint of the IdP.',
      () => [],
      true,
      false,
    ),
  ];
}
