import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_ListenerRuleActionAuthenticateOidc {
  // The authorization endpoint of the IdP.
  authorizationEndpoint?: string;

  // The OAuth 2.0 client secret.
  clientSecret?: string;

  // The OIDC issuer identifier of the IdP.
  issuer?: string;

  // The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`
  onUnauthenticatedRequest?: string;

  // The set of user claims to be requested from the IdP.
  scope?: string;

  // The maximum duration of the authentication session, in seconds.
  sessionTimeout?: number;

  // The user info endpoint of the IdP.
  userInfoEndpoint?: string;

  // The query parameters to include in the redirect request to the authorization endpoint. Max: 10.
  authenticationRequestExtraParams?: Map<string, string>;

  // The OAuth 2.0 client identifier.
  clientId?: string;

  // The name of the cookie used to maintain session information.
  sessionCookieName?: string;

  // The token endpoint of the IdP.
  tokenEndpoint?: string;
}

export function lb_ListenerRuleActionAuthenticateOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tokenEndpoint",
      "The token endpoint of the IdP.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "The OAuth 2.0 client secret.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onUnauthenticatedRequest",
      "The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "The user info endpoint of the IdP.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "The query parameters to include in the redirect request to the authorization endpoint. Max: 10.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The OAuth 2.0 client identifier.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "The authorization endpoint of the IdP.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "The OIDC issuer identifier of the IdP.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scope",
      "The set of user claims to be requested from the IdP.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sessionTimeout",
      "The maximum duration of the authentication session, in seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionCookieName",
      "The name of the cookie used to maintain session information.",
      () => [],
      false,
      false,
    ),
  ];
}
