import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lb_getListenerDefaultActionRedirect,
  lb_getListenerDefaultActionRedirect_GetTypes,
} from "./lb_getListenerDefaultActionRedirect";
import {
  lb_getListenerDefaultActionAuthenticateCognito,
  lb_getListenerDefaultActionAuthenticateCognito_GetTypes,
} from "./lb_getListenerDefaultActionAuthenticateCognito";
import {
  lb_getListenerDefaultActionAuthenticateOidc,
  lb_getListenerDefaultActionAuthenticateOidc_GetTypes,
} from "./lb_getListenerDefaultActionAuthenticateOidc";
import {
  lb_getListenerDefaultActionFixedResponse,
  lb_getListenerDefaultActionFixedResponse_GetTypes,
} from "./lb_getListenerDefaultActionFixedResponse";
import {
  lb_getListenerDefaultActionForward,
  lb_getListenerDefaultActionForward_GetTypes,
} from "./lb_getListenerDefaultActionForward";

export interface lb_getListenerDefaultAction {
  //
  order?: number;

  //
  redirects?: Array<lb_getListenerDefaultActionRedirect>;

  //
  targetGroupArn?: string;

  //
  type?: string;

  //
  authenticateCognitos?: Array<lb_getListenerDefaultActionAuthenticateCognito>;

  //
  authenticateOidcs?: Array<lb_getListenerDefaultActionAuthenticateOidc>;

  //
  fixedResponses?: Array<lb_getListenerDefaultActionFixedResponse>;

  //
  forwards?: Array<lb_getListenerDefaultActionForward>;
}

export function lb_getListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "authenticateOidcs",
      "",
      () => lb_getListenerDefaultActionAuthenticateOidc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fixedResponses",
      "",
      () => lb_getListenerDefaultActionFixedResponse_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "forwards",
      "",
      () => lb_getListenerDefaultActionForward_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "order", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "redirects",
      "",
      () => lb_getListenerDefaultActionRedirect_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "authenticateCognitos",
      "",
      () => lb_getListenerDefaultActionAuthenticateCognito_GetTypes(),
      true,
      false,
    ),
  ];
}
