import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_ListenerRuleActionAuthenticateCognito {
  // The name of the cookie used to maintain session information.
  sessionCookieName?: string;

  // The maximum duration of the authentication session, in seconds.
  sessionTimeout?: number;

  // The ARN of the Cognito user pool.
  userPoolArn?: string;

  // The ID of the Cognito user pool client.
  userPoolClientId?: string;

  // The domain prefix or fully-qualified domain name of the Cognito user pool.
  userPoolDomain?: string;

  // The query parameters to include in the redirect request to the authorization endpoint. Max: 10.
  authenticationRequestExtraParams?: Map<string, string>;

  // The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`
  onUnauthenticatedRequest?: string;

  // The set of user claims to be requested from the IdP.
  scope?: string;
}

export function alb_ListenerRuleActionAuthenticateCognito_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'onUnauthenticatedRequest',
      'The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scope',
      'The set of user claims to be requested from the IdP.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sessionCookieName',
      'The name of the cookie used to maintain session information.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sessionTimeout',
      'The maximum duration of the authentication session, in seconds.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolArn',
      'The ARN of the Cognito user pool.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolClientId',
      'The ID of the Cognito user pool client.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolDomain',
      'The domain prefix or fully-qualified domain name of the Cognito user pool.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'authenticationRequestExtraParams',
      'The query parameters to include in the redirect request to the authorization endpoint. Max: 10.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
