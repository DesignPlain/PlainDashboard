import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_ManagedUserPoolClientAnalyticsConfiguration,
  cognito_ManagedUserPoolClientAnalyticsConfiguration_GetTypes,
} from "../types/cognito_ManagedUserPoolClientAnalyticsConfiguration";
import {
  cognito_ManagedUserPoolClientTokenValidityUnits,
  cognito_ManagedUserPoolClientTokenValidityUnits_GetTypes,
} from "../types/cognito_ManagedUserPoolClientTokenValidityUnits";

export interface ManagedUserPoolClientArgs {
  // List of provider names for the identity providers that are supported on this client. It uses the `provider_name` attribute of the `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).
  supportedIdentityProviders?: Array<string>;

  // List of allowed OAuth flows, including `code`, `implicit`, and `client_credentials`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  allowedOauthFlows?: Array<string>;

  // Default redirect URI and must be included in the list of callback URLs.
  defaultRedirectUri?: string;

  // Regular expression that matches the name of the desired User Pool Client. It must only match one User Pool Client.
  namePattern?: string;

  // Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used. By default, the unit is days. The unit can be overridden by a value in `token_validity_units.refresh_token`.
  refreshTokenValidity?: number;

  /*
String that matches the beginning of the name of the desired User Pool Client. It must match only one User Pool Client.

The following arguments are optional:
*/
  namePrefix?: string;

  // List of user pool attributes that the application client can read from.
  readAttributes?: Array<string>;

  // User pool that the client belongs to.
  userPoolId?: string;

  // Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.access_token`.
  accessTokenValidity?: number;

  // List of allowed OAuth scopes, including `phone`, `email`, `openid`, `profile`, and `aws.cognito.signin.user.admin`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  allowedOauthScopes?: Array<string>;

  // Enables or disables token revocation.
  enableTokenRevocation?: boolean;

  // List of authentication flows. The available options include ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_REFRESH_TOKEN_AUTH.
  explicitAuthFlows?: Array<string>;

  // List of user pool attributes that the application client can write to.
  writeAttributes?: Array<string>;

  // Configuration block for Amazon Pinpoint analytics that collects metrics for this user pool. See details below.
  analyticsConfiguration?: cognito_ManagedUserPoolClientAnalyticsConfiguration;

  // Enables the propagation of additional user context data.
  enablePropagateAdditionalUserContextData?: boolean;

  // Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.id_token`.
  idTokenValidity?: number;

  // Setting determines the errors and responses returned by Cognito APIs when a user does not exist in the user pool during authentication, account confirmation, and password recovery.
  preventUserExistenceErrors?: string;

  // Configuration block for representing the validity times in units. See details below. Detailed below.
  tokenValidityUnits?: cognito_ManagedUserPoolClientTokenValidityUnits;

  // Whether the client is allowed to use OAuth 2.0 features. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure the following arguments: `callback_urls`, `logout_urls`, `allowed_oauth_scopes` and `allowed_oauth_flows`.
  allowedOauthFlowsUserPoolClient?: boolean;

  // Duration, in minutes, of the session token created by Amazon Cognito for each API request in an authentication flow. The session token must be responded to by the native user of the user pool before it expires. Valid values for `auth_session_validity` are between `3` and `15`, with a default value of `3`.
  authSessionValidity?: number;

  // List of allowed callback URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  callbackUrls?: Array<string>;

  // List of allowed logout URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  logoutUrls?: Array<string>;
}
export class ManagedUserPoolClient extends DS_Resource {
  /*
String that matches the beginning of the name of the desired User Pool Client. It must match only one User Pool Client.

The following arguments are optional:
*/
  public namePrefix?: string;

  // Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used. By default, the unit is days. The unit can be overridden by a value in `token_validity_units.refresh_token`.
  public refreshTokenValidity?: number;

  // Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.access_token`.
  public accessTokenValidity?: number;

  // Duration, in minutes, of the session token created by Amazon Cognito for each API request in an authentication flow. The session token must be responded to by the native user of the user pool before it expires. Valid values for `auth_session_validity` are between `3` and `15`, with a default value of `3`.
  public authSessionValidity?: number;

  // List of allowed callback URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  public callbackUrls?: Array<string>;

  // Enables the propagation of additional user context data.
  public enablePropagateAdditionalUserContextData?: boolean;

  // Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.id_token`.
  public idTokenValidity?: number;

  // List of allowed logout URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  public logoutUrls?: Array<string>;

  // List of provider names for the identity providers that are supported on this client. It uses the `provider_name` attribute of the `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).
  public supportedIdentityProviders?: Array<string>;

  // Configuration block for representing the validity times in units. See details below. Detailed below.
  public tokenValidityUnits?: cognito_ManagedUserPoolClientTokenValidityUnits;

  // List of user pool attributes that the application client can write to.
  public writeAttributes?: Array<string>;

  // Whether the client is allowed to use OAuth 2.0 features. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure the following arguments: `callback_urls`, `logout_urls`, `allowed_oauth_scopes` and `allowed_oauth_flows`.
  public allowedOauthFlowsUserPoolClient?: boolean;

  // List of allowed OAuth scopes, including `phone`, `email`, `openid`, `profile`, and `aws.cognito.signin.user.admin`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  public allowedOauthScopes?: Array<string>;

  // Configuration block for Amazon Pinpoint analytics that collects metrics for this user pool. See details below.
  public analyticsConfiguration?: cognito_ManagedUserPoolClientAnalyticsConfiguration;

  // Default redirect URI and must be included in the list of callback URLs.
  public defaultRedirectUri?: string;

  // Setting determines the errors and responses returned by Cognito APIs when a user does not exist in the user pool during authentication, account confirmation, and password recovery.
  public preventUserExistenceErrors?: string;

  // List of user pool attributes that the application client can read from.
  public readAttributes?: Array<string>;

  // List of allowed OAuth flows, including `code`, `implicit`, and `client_credentials`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.
  public allowedOauthFlows?: Array<string>;

  // Enables or disables token revocation.
  public enableTokenRevocation?: boolean;

  // Client secret of the user pool client.
  public clientSecret?: string;

  // List of authentication flows. The available options include ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_REFRESH_TOKEN_AUTH.
  public explicitAuthFlows?: Array<string>;

  // Name of the user pool client.
  public name?: string;

  // Regular expression that matches the name of the desired User Pool Client. It must only match one User Pool Client.
  public namePattern?: string;

  // User pool that the client belongs to.
  public userPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "allowedOauthFlows",
        "List of allowed OAuth flows, including `code`, `implicit`, and `client_credentials`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enablePropagateAdditionalUserContextData",
        "Enables the propagation of additional user context data.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "idTokenValidity",
        "Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.id_token`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowedOauthFlowsUserPoolClient",
        "Whether the client is allowed to use OAuth 2.0 features. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure the following arguments: `callback_urls`, `logout_urls`, `allowed_oauth_scopes` and `allowed_oauth_flows`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "supportedIdentityProviders",
        "List of provider names for the identity providers that are supported on this client. It uses the `provider_name` attribute of the `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePattern",
        "Regular expression that matches the name of the desired User Pool Client. It must only match one User Pool Client.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "refreshTokenValidity",
        "Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used. By default, the unit is days. The unit can be overridden by a value in `token_validity_units.refresh_token`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "allowedOauthScopes",
        "List of allowed OAuth scopes, including `phone`, `email`, `openid`, `profile`, and `aws.cognito.signin.user.admin`. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "explicitAuthFlows",
        "List of authentication flows. The available options include ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_REFRESH_TOKEN_AUTH.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "authSessionValidity",
        "Duration, in minutes, of the session token created by Amazon Cognito for each API request in an authentication flow. The session token must be responded to by the native user of the user pool before it expires. Valid values for `auth_session_validity` are between `3` and `15`, with a default value of `3`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "callbackUrls",
        "List of allowed callback URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logoutUrls",
        "List of allowed logout URLs for the identity providers. `allowed_oauth_flows_user_pool_client` must be set to `true` before you can configure this option.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRedirectUri",
        "Default redirect URI and must be included in the list of callback URLs.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "String that matches the beginning of the name of the desired User Pool Client. It must match only one User Pool Client.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "readAttributes",
        "List of user pool attributes that the application client can read from.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "User pool that the client belongs to.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "writeAttributes",
        "List of user pool attributes that the application client can write to.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "accessTokenValidity",
        "Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.access_token`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableTokenRevocation",
        "Enables or disables token revocation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "analyticsConfiguration",
        "Configuration block for Amazon Pinpoint analytics that collects metrics for this user pool. See details below.",
        () => cognito_ManagedUserPoolClientAnalyticsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preventUserExistenceErrors",
        "Setting determines the errors and responses returned by Cognito APIs when a user does not exist in the user pool during authentication, account confirmation, and password recovery.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tokenValidityUnits",
        "Configuration block for representing the validity times in units. See details below. Detailed below.",
        () => cognito_ManagedUserPoolClientTokenValidityUnits_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
