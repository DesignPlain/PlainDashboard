import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_getListenerDefaultActionAuthenticateOidc {
  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  onUnauthenticatedRequest?: string;

  //
  scope?: string;

  //
  sessionCookieName?: string;

  //
  tokenEndpoint?: string;

  //
  userInfoEndpoint?: string;

  //
  authenticationRequestExtraParams?: Map<string, string>;

  //
  authorizationEndpoint?: string;

  //
  issuer?: string;

  //
  sessionTimeout?: number;
}

export function lb_getListenerDefaultActionAuthenticateOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionCookieName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tokenEndpoint",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "issuer", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "sessionTimeout",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "clientId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "onUnauthenticatedRequest",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "scope", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
