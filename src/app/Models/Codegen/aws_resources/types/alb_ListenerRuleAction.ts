import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  alb_ListenerRuleActionRedirect,
  alb_ListenerRuleActionRedirect_GetTypes,
} from "./alb_ListenerRuleActionRedirect";
import {
  alb_ListenerRuleActionAuthenticateCognito,
  alb_ListenerRuleActionAuthenticateCognito_GetTypes,
} from "./alb_ListenerRuleActionAuthenticateCognito";
import {
  alb_ListenerRuleActionAuthenticateOidc,
  alb_ListenerRuleActionAuthenticateOidc_GetTypes,
} from "./alb_ListenerRuleActionAuthenticateOidc";
import {
  alb_ListenerRuleActionFixedResponse,
  alb_ListenerRuleActionFixedResponse_GetTypes,
} from "./alb_ListenerRuleActionFixedResponse";
import {
  alb_ListenerRuleActionForward,
  alb_ListenerRuleActionForward_GetTypes,
} from "./alb_ListenerRuleActionForward";

export interface alb_ListenerRuleAction {
  // Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.
  fixedResponse?: alb_ListenerRuleActionFixedResponse;

  // Information for creating an action that distributes requests among one or more target groups. Specify only if `type` is `forward`. If you specify both `forward` block and `target_group_arn` attribute, you can specify only one target group using `forward` and it must be the same target group specified in `target_group_arn`.
  forward?: alb_ListenerRuleActionForward;

  //
  order?: number;

  // Information for creating a redirect action. Required if `type` is `redirect`.
  redirect?: alb_ListenerRuleActionRedirect;

  // The ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead.
  targetGroupArn?: string;

  // The type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.
  type?: string;

  // Information for creating an authenticate action using Cognito. Required if `type` is `authenticate-cognito`.
  authenticateCognito?: alb_ListenerRuleActionAuthenticateCognito;

  // Information for creating an authenticate action using OIDC. Required if `type` is `authenticate-oidc`.
  authenticateOidc?: alb_ListenerRuleActionAuthenticateOidc;
}

export function alb_ListenerRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "redirect",
      "Information for creating a redirect action. Required if `type` is `redirect`.",
      alb_ListenerRuleActionRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "The ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateCognito",
      "Information for creating an authenticate action using Cognito. Required if `type` is `authenticate-cognito`.",
      alb_ListenerRuleActionAuthenticateCognito_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticateOidc",
      "Information for creating an authenticate action using OIDC. Required if `type` is `authenticate-oidc`.",
      alb_ListenerRuleActionAuthenticateOidc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fixedResponse",
      "Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.",
      alb_ListenerRuleActionFixedResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forward",
      "Information for creating an action that distributes requests among one or more target groups. Specify only if `type` is `forward`. If you specify both `forward` block and `target_group_arn` attribute, you can specify only one target group using `forward` and it must be the same target group specified in `target_group_arn`.",
      alb_ListenerRuleActionForward_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "order", "", [], false, false),
  ];
}
