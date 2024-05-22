import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alb_getListenerDefaultActionRedirect,
  alb_getListenerDefaultActionRedirect_GetTypes,
} from "./alb_getListenerDefaultActionRedirect";
import {
  alb_getListenerDefaultActionAuthenticateCognito,
  alb_getListenerDefaultActionAuthenticateCognito_GetTypes,
} from "./alb_getListenerDefaultActionAuthenticateCognito";
import {
  alb_getListenerDefaultActionAuthenticateOidc,
  alb_getListenerDefaultActionAuthenticateOidc_GetTypes,
} from "./alb_getListenerDefaultActionAuthenticateOidc";
import {
  alb_getListenerDefaultActionFixedResponse,
  alb_getListenerDefaultActionFixedResponse_GetTypes,
} from "./alb_getListenerDefaultActionFixedResponse";
import {
  alb_getListenerDefaultActionForward,
  alb_getListenerDefaultActionForward_GetTypes,
} from "./alb_getListenerDefaultActionForward";

export interface alb_getListenerDefaultAction {
  //
  order?: number;

  //
  redirects?: Array<alb_getListenerDefaultActionRedirect>;

  //
  targetGroupArn?: string;

  //
  type?: string;

  //
  authenticateCognitos?: Array<alb_getListenerDefaultActionAuthenticateCognito>;

  //
  authenticateOidcs?: Array<alb_getListenerDefaultActionAuthenticateOidc>;

  //
  fixedResponses?: Array<alb_getListenerDefaultActionFixedResponse>;

  //
  forwards?: Array<alb_getListenerDefaultActionForward>;
}

export function alb_getListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "authenticateCognitos",
      "",
      alb_getListenerDefaultActionAuthenticateCognito_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "authenticateOidcs",
      "",
      alb_getListenerDefaultActionAuthenticateOidc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fixedResponses",
      "",
      alb_getListenerDefaultActionFixedResponse_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "forwards",
      "",
      alb_getListenerDefaultActionForward_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "order", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "redirects",
      "",
      alb_getListenerDefaultActionRedirect_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "targetGroupArn", "", [], true, false),
  ];
}
