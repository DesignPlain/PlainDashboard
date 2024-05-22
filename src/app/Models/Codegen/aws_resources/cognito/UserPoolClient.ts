import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cognito_UserPoolClientTokenValidityUnits,
  cognito_UserPoolClientTokenValidityUnits_GetTypes,
} from "../types/cognito_UserPoolClientTokenValidityUnits";
import {
  cognito_UserPoolClientAnalyticsConfiguration,
  cognito_UserPoolClientAnalyticsConfiguration_GetTypes,
} from "../types/cognito_UserPoolClientAnalyticsConfiguration";

export interface UserPoolClientArgs {
  // Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires. Valid values between `3` and `15`. Default value is `3`.
  authSessionValidity?: number;

  // Activates the propagation of additional user context data.
  enablePropagateAdditionalUserContextData?: boolean;

  // Enables or disables token revocation.
  enableTokenRevocation?: boolean;

  // List of allowed logout URLs for the identity providers.
  logoutUrls?: Array<string>;

  /*
Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used.
By default, the unit is days.
The unit can be overridden by a value in `token_validity_units.refresh_token`.
*/
  refreshTokenValidity?: number;

  // Configuration block for units in which the validity times are represented in. Detailed below.
  tokenValidityUnits?: cognito_UserPoolClientTokenValidityUnits;

  /*
User pool the client belongs to.

The following arguments are optional:
*/
  userPoolId?: string;

  /*
Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used.
By default, the unit is hours.
The unit can be overridden by a value in `token_validity_units.access_token`.
*/
  accessTokenValidity?: number;

  // List of allowed callback URLs for the identity providers.
  callbackUrls?: Array<string>;

  /*
Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used.
By default, the unit is hours.
The unit can be overridden by a value in `token_validity_units.id_token`.
*/
  idTokenValidity?: number;

  // List of user pool attributes the application client can write to.
  writeAttributes?: Array<string>;

  // List of allowed OAuth flows (code, implicit, client_credentials).
  allowedOauthFlows?: Array<string>;

  // Default redirect URI. Must be in the list of callback URLs.
  defaultRedirectUri?: string;

  // Should an application secret be generated.
  generateSecret?: boolean;

  // Choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to `ENABLED` and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs will return a `UserNotFoundException` exception if the user does not exist in the user pool.
  preventUserExistenceErrors?: string;

  // List of user pool attributes the application client can read from.
  readAttributes?: Array<string>;

  // List of provider names for the identity providers that are supported on this client. Uses the `provider_name` attribute of `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).
  supportedIdentityProviders?: Array<string>;

  // Whether the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.
  allowedOauthFlowsUserPoolClient?: boolean;

  // List of allowed OAuth scopes (phone, email, openid, profile, and aws.cognito.signin.user.admin).
  allowedOauthScopes?: Array<string>;

  // Configuration block for Amazon Pinpoint analytics for collecting metrics for this user pool. Detailed below.
  analyticsConfiguration?: cognito_UserPoolClientAnalyticsConfiguration;

  // List of authentication flows (ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, ALLOW_REFRESH_TOKEN_AUTH).
  explicitAuthFlows?: Array<string>;

  // Name of the application client.
  name?: string;
}
export class UserPoolClient extends Resource {
  // List of allowed OAuth scopes (phone, email, openid, profile, and aws.cognito.signin.user.admin).
  public allowedOauthScopes?: Array<string>;

  // Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires. Valid values between `3` and `15`. Default value is `3`.
  public authSessionValidity?: number;

  // Default redirect URI. Must be in the list of callback URLs.
  public defaultRedirectUri?: string;

  // Choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to `ENABLED` and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs will return a `UserNotFoundException` exception if the user does not exist in the user pool.
  public preventUserExistenceErrors?: string;

  // Whether the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.
  public allowedOauthFlowsUserPoolClient?: boolean;

  // List of allowed callback URLs for the identity providers.
  public callbackUrls?: Array<string>;

  // Client secret of the user pool client.
  public clientSecret?: string;

  // Should an application secret be generated.
  public generateSecret?: boolean;

  /*
Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used.
By default, the unit is days.
The unit can be overridden by a value in `token_validity_units.refresh_token`.
*/
  public refreshTokenValidity?: number;

  // List of user pool attributes the application client can write to.
  public writeAttributes?: Array<string>;

  /*
Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used.
By default, the unit is hours.
The unit can be overridden by a value in `token_validity_units.access_token`.
*/
  public accessTokenValidity?: number;

  // Configuration block for Amazon Pinpoint analytics for collecting metrics for this user pool. Detailed below.
  public analyticsConfiguration?: cognito_UserPoolClientAnalyticsConfiguration;

  // List of authentication flows (ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, ALLOW_REFRESH_TOKEN_AUTH).
  public explicitAuthFlows?: Array<string>;

  // List of allowed logout URLs for the identity providers.
  public logoutUrls?: Array<string>;

  // List of provider names for the identity providers that are supported on this client. Uses the `provider_name` attribute of `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).
  public supportedIdentityProviders?: Array<string>;

  // List of allowed OAuth flows (code, implicit, client_credentials).
  public allowedOauthFlows?: Array<string>;

  // Activates the propagation of additional user context data.
  public enablePropagateAdditionalUserContextData?: boolean;

  // Enables or disables token revocation.
  public enableTokenRevocation?: boolean;

  /*
Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used.
By default, the unit is hours.
The unit can be overridden by a value in `token_validity_units.id_token`.
*/
  public idTokenValidity?: number;

  // Name of the application client.
  public name?: string;

  // List of user pool attributes the application client can read from.
  public readAttributes?: Array<string>;

  // Configuration block for units in which the validity times are represented in. Detailed below.
  public tokenValidityUnits?: cognito_UserPoolClientTokenValidityUnits;

  /*
User pool the client belongs to.

The following arguments are optional:
*/
  public userPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "analyticsConfiguration",
        "Configuration block for Amazon Pinpoint analytics for collecting metrics for this user pool. Detailed below.",
        cognito_UserPoolClientAnalyticsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "explicitAuthFlows",
        "List of authentication flows (ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, ALLOW_REFRESH_TOKEN_AUTH).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableTokenRevocation",
        "Enables or disables token revocation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "User pool the client belongs to.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "allowedOauthFlows",
        "List of allowed OAuth flows (code, implicit, client_credentials).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "allowedOauthScopes",
        "List of allowed OAuth scopes (phone, email, openid, profile, and aws.cognito.signin.user.admin).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enablePropagateAdditionalUserContextData",
        "Activates the propagation of additional user context data.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logoutUrls",
        "List of allowed logout URLs for the identity providers.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "accessTokenValidity",
        "Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used.\nBy default, the unit is hours.\nThe unit can be overridden by a value in `token_validity_units.access_token`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRedirectUri",
        "Default redirect URI. Must be in the list of callback URLs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the application client.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "authSessionValidity",
        "Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires. Valid values between `3` and `15`. Default value is `3`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "refreshTokenValidity",
        "Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used.\nBy default, the unit is days.\nThe unit can be overridden by a value in `token_validity_units.refresh_token`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "readAttributes",
        "List of user pool attributes the application client can read from.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowedOauthFlowsUserPoolClient",
        "Whether the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "generateSecret",
        "Should an application secret be generated.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preventUserExistenceErrors",
        "Choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to `ENABLED` and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs will return a `UserNotFoundException` exception if the user does not exist in the user pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "supportedIdentityProviders",
        "List of provider names for the identity providers that are supported on this client. Uses the `provider_name` attribute of `aws.cognito.IdentityProvider` resource(s), or the equivalent string(s).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tokenValidityUnits",
        "Configuration block for units in which the validity times are represented in. Detailed below.",
        cognito_UserPoolClientTokenValidityUnits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "callbackUrls",
        "List of allowed callback URLs for the identity providers.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "idTokenValidity",
        "Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used.\nBy default, the unit is hours.\nThe unit can be overridden by a value in `token_validity_units.id_token`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "writeAttributes",
        "List of user pool attributes the application client can write to.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
