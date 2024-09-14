import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lb_ListenerDefaultActionRedirect,
  lb_ListenerDefaultActionRedirect_GetTypes,
} from "./lb_ListenerDefaultActionRedirect";
import {
  lb_ListenerDefaultActionAuthenticateCognito,
  lb_ListenerDefaultActionAuthenticateCognito_GetTypes,
} from "./lb_ListenerDefaultActionAuthenticateCognito";
import {
  lb_ListenerDefaultActionAuthenticateOidc,
  lb_ListenerDefaultActionAuthenticateOidc_GetTypes,
} from "./lb_ListenerDefaultActionAuthenticateOidc";
import {
  lb_ListenerDefaultActionFixedResponse,
  lb_ListenerDefaultActionFixedResponse_GetTypes,
} from "./lb_ListenerDefaultActionFixedResponse";
import {
  lb_ListenerDefaultActionForward,
  lb_ListenerDefaultActionForward_GetTypes,
} from "./lb_ListenerDefaultActionForward";

export interface lb_ListenerDefaultAction {
  // Configuration block for creating a redirect action. Required if `type` is `redirect`. Detailed below.
  redirect?: lb_ListenerDefaultActionRedirect;

  /*
ARN of the Target Group to which to route traffic.
Specify only if `type` is `forward` and you want to route to a single target group.
To route to one or more target groups, use a `forward` block instead.
Cannot be specified with `forward`.
*/
  targetGroupArn?: string;

  /*
Type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.

The following arguments are optional:
*/
  type?: string;

  // Configuration block for using Amazon Cognito to authenticate users. Specify only when `type` is `authenticate-cognito`. Detailed below.
  authenticateCognito?: lb_ListenerDefaultActionAuthenticateCognito;

  // Configuration block for an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `type` is `authenticate-oidc`. Detailed below.
  authenticateOidc?: lb_ListenerDefaultActionAuthenticateOidc;

  // Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.
  fixedResponse?: lb_ListenerDefaultActionFixedResponse;

  /*
Configuration block for creating an action that distributes requests among one or more target groups.
Specify only if `type` is `forward`.
Cannot be specified with `target_group_arn`.
Detailed below.
*/
  forward?: lb_ListenerDefaultActionForward;

  /*
Order for the action.
The action with the lowest value for order is performed first.
Valid values are between `1` and `50000`.
Defaults to the position in the list of actions.
*/
  order?: number;
}

export function lb_ListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "redirect",
      "Configuration block for creating a redirect action. Required if `type` is `redirect`. Detailed below.",
      () => lb_ListenerDefaultActionRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "ARN of the Target Group to which to route traffic.\nSpecify only if `type` is `forward` and you want to route to a single target group.\nTo route to one or more target groups, use a `forward` block instead.\nCannot be specified with `forward`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateCognito",
      "Configuration block for using Amazon Cognito to authenticate users. Specify only when `type` is `authenticate-cognito`. Detailed below.",
      () => lb_ListenerDefaultActionAuthenticateCognito_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateOidc",
      "Configuration block for an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `type` is `authenticate-oidc`. Detailed below.",
      () => lb_ListenerDefaultActionAuthenticateOidc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fixedResponse",
      "Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.",
      () => lb_ListenerDefaultActionFixedResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forward",
      "Configuration block for creating an action that distributes requests among one or more target groups.\nSpecify only if `type` is `forward`.\nCannot be specified with `target_group_arn`.\nDetailed below.",
      () => lb_ListenerDefaultActionForward_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "order",
      "Order for the action.\nThe action with the lowest value for order is performed first.\nValid values are between `1` and `50000`.\nDefaults to the position in the list of actions.",
      () => [],
      false,
      false,
    ),
  ];
}
