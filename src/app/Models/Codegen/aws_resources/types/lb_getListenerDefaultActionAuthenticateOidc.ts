import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_getListenerDefaultActionAuthenticateOidc {
  //
  scope?: string;

  //
  sessionCookieName?: string;

  //
  sessionTimeout?: number;

  //
  tokenEndpoint?: string;

  //
  userInfoEndpoint?: string;

  //
  authenticationRequestExtraParams?: Map<string, string>;

  //
  authorizationEndpoint?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  issuer?: string;

  //
  onUnauthenticatedRequest?: string;
}

export function lb_getListenerDefaultActionAuthenticateOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "sessionTimeout", "", [], true, false),
    new DynamicUIProps(InputType.String, "tokenEndpoint", "", [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "clientId", "", [], true, false),
    new DynamicUIProps(InputType.String, "clientSecret", "", [], true, false),
    new DynamicUIProps(InputType.String, "issuer", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "onUnauthenticatedRequest",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "scope", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sessionCookieName",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "",
      [],
      true,
      false,
    ),
  ];
}
