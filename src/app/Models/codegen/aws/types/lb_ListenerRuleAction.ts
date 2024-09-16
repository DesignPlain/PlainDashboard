import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lb_ListenerRuleActionAuthenticateOidc,
  lb_ListenerRuleActionAuthenticateOidc_GetTypes,
} from './lb_ListenerRuleActionAuthenticateOidc';
import {
  lb_ListenerRuleActionFixedResponse,
  lb_ListenerRuleActionFixedResponse_GetTypes,
} from './lb_ListenerRuleActionFixedResponse';
import {
  lb_ListenerRuleActionForward,
  lb_ListenerRuleActionForward_GetTypes,
} from './lb_ListenerRuleActionForward';
import {
  lb_ListenerRuleActionRedirect,
  lb_ListenerRuleActionRedirect_GetTypes,
} from './lb_ListenerRuleActionRedirect';
import {
  lb_ListenerRuleActionAuthenticateCognito,
  lb_ListenerRuleActionAuthenticateCognito_GetTypes,
} from './lb_ListenerRuleActionAuthenticateCognito';

export interface lb_ListenerRuleAction {
  // Information for creating a redirect action. Required if `type` is `redirect`.
  redirect?: lb_ListenerRuleActionRedirect;

  /*
ARN of the Target Group to which to route traffic.
Specify only if `type` is `forward` and you want to route to a single target group.
To route to one or more target groups, use a `forward` block instead.
Cannot be specified with `forward`.
*/
  targetGroupArn?: string;

  // The type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.
  type?: string;

  // Information for creating an authenticate action using Cognito. Required if `type` is `authenticate-cognito`.
  authenticateCognito?: lb_ListenerRuleActionAuthenticateCognito;

  // Information for creating an authenticate action using OIDC. Required if `type` is `authenticate-oidc`.
  authenticateOidc?: lb_ListenerRuleActionAuthenticateOidc;

  // Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.
  fixedResponse?: lb_ListenerRuleActionFixedResponse;

  /*
Configuration block for creating an action that distributes requests among one or more target groups.
Specify only if `type` is `forward`.
Cannot be specified with `target_group_arn`.
*/
  forward?: lb_ListenerRuleActionForward;

  /*
Order for the action.
The action with the lowest value for order is performed first.
Valid values are between `1` and `50000`.
Defaults to the position in the list of actions.
*/
  order?: number;
}

export function lb_ListenerRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'targetGroupArn',
      'ARN of the Target Group to which to route traffic.\nSpecify only if `type` is `forward` and you want to route to a single target group.\nTo route to one or more target groups, use a `forward` block instead.\nCannot be specified with `forward`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'authenticateCognito',
      'Information for creating an authenticate action using Cognito. Required if `type` is `authenticate-cognito`.',
      () => lb_ListenerRuleActionAuthenticateCognito_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'authenticateOidc',
      'Information for creating an authenticate action using OIDC. Required if `type` is `authenticate-oidc`.',
      () => lb_ListenerRuleActionAuthenticateOidc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fixedResponse',
      'Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.',
      () => lb_ListenerRuleActionFixedResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'forward',
      'Configuration block for creating an action that distributes requests among one or more target groups.\nSpecify only if `type` is `forward`.\nCannot be specified with `target_group_arn`.',
      () => lb_ListenerRuleActionForward_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'order',
      'Order for the action.\nThe action with the lowest value for order is performed first.\nValid values are between `1` and `50000`.\nDefaults to the position in the list of actions.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'redirect',
      'Information for creating a redirect action. Required if `type` is `redirect`.',
      () => lb_ListenerRuleActionRedirect_GetTypes(),
      false,
      false,
    ),
  ];
}
