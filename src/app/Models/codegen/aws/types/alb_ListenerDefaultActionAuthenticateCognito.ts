import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_ListenerDefaultActionAuthenticateCognito {
  // Query parameters to include in the redirect request to the authorization endpoint. Max: 10. Detailed below.
  authenticationRequestExtraParams?: Map<string, string>;

  // Behavior if the user is not authenticated. Valid values are `deny`, `allow` and `authenticate`.
  onUnauthenticatedRequest?: string;

  // Set of user claims to be requested from the IdP.
  scope?: string;

  // Name of the cookie used to maintain session information.
  sessionCookieName?: string;

  // Maximum duration of the authentication session, in seconds.
  sessionTimeout?: number;

  // ARN of the Cognito user pool.
  userPoolArn?: string;

  // ID of the Cognito user pool client.
  userPoolClientId?: string;

  /*
Domain prefix or fully-qualified domain name of the Cognito user pool.

The following arguments are optional:
*/
  userPoolDomain?: string;
}

export function alb_ListenerDefaultActionAuthenticateCognito_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "Query parameters to include in the redirect request to the authorization endpoint. Max: 10. Detailed below.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onUnauthenticatedRequest",
      "Behavior if the user is not authenticated. Valid values are `deny`, `allow` and `authenticate`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scope",
      "Set of user claims to be requested from the IdP.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionCookieName",
      "Name of the cookie used to maintain session information.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sessionTimeout",
      "Maximum duration of the authentication session, in seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolArn",
      "ARN of the Cognito user pool.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolClientId",
      "ID of the Cognito user pool client.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolDomain",
      "Domain prefix or fully-qualified domain name of the Cognito user pool.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
  ];
}
