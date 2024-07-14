import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  alb_ListenerDefaultActionRedirect,
  alb_ListenerDefaultActionRedirect_GetTypes,
} from "./alb_ListenerDefaultActionRedirect";
import {
  alb_ListenerDefaultActionAuthenticateCognito,
  alb_ListenerDefaultActionAuthenticateCognito_GetTypes,
} from "./alb_ListenerDefaultActionAuthenticateCognito";
import {
  alb_ListenerDefaultActionAuthenticateOidc,
  alb_ListenerDefaultActionAuthenticateOidc_GetTypes,
} from "./alb_ListenerDefaultActionAuthenticateOidc";
import {
  alb_ListenerDefaultActionFixedResponse,
  alb_ListenerDefaultActionFixedResponse_GetTypes,
} from "./alb_ListenerDefaultActionFixedResponse";
import {
  alb_ListenerDefaultActionForward,
  alb_ListenerDefaultActionForward_GetTypes,
} from "./alb_ListenerDefaultActionForward";

export interface alb_ListenerDefaultAction {
  // Configuration block for creating a redirect action. Required if `type` is `redirect`. Detailed below.
  redirect?: alb_ListenerDefaultActionRedirect;

  // ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead.
  targetGroupArn?: string;

  /*
Type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.

The following arguments are optional:
*/
  type?: string;

  // Configuration block for using Amazon Cognito to authenticate users. Specify only when `type` is `authenticate-cognito`. Detailed below.
  authenticateCognito?: alb_ListenerDefaultActionAuthenticateCognito;

  // Configuration block for an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `type` is `authenticate-oidc`. Detailed below.
  authenticateOidc?: alb_ListenerDefaultActionAuthenticateOidc;

  // Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.
  fixedResponse?: alb_ListenerDefaultActionFixedResponse;

  // Configuration block for creating an action that distributes requests among one or more target groups. Specify only if `type` is `forward`. If you specify both `forward` block and `target_group_arn` attribute, you can specify only one target group using `forward` and it must be the same target group specified in `target_group_arn`. Detailed below.
  forward?: alb_ListenerDefaultActionForward;

  // Order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. Valid values are between `1` and `50000`.
  order?: number;
}

export function alb_ListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "forward",
      "Configuration block for creating an action that distributes requests among one or more target groups. Specify only if `type` is `forward`. If you specify both `forward` block and `target_group_arn` attribute, you can specify only one target group using `forward` and it must be the same target group specified in `target_group_arn`. Detailed below.",
      alb_ListenerDefaultActionForward_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "order",
      "Order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. Valid values are between `1` and `50000`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redirect",
      "Configuration block for creating a redirect action. Required if `type` is `redirect`. Detailed below.",
      alb_ListenerDefaultActionRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateCognito",
      "Configuration block for using Amazon Cognito to authenticate users. Specify only when `type` is `authenticate-cognito`. Detailed below.",
      alb_ListenerDefaultActionAuthenticateCognito_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateOidc",
      "Configuration block for an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `type` is `authenticate-oidc`. Detailed below.",
      alb_ListenerDefaultActionAuthenticateOidc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fixedResponse",
      "Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.",
      alb_ListenerDefaultActionFixedResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
