import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_getListenerDefaultActionAuthenticateOidc {
  //
  clientSecret?: string;

  //
  onUnauthenticatedRequest?: string;

  //
  scope?: string;

  //
  sessionCookieName?: string;

  //
  authorizationEndpoint?: string;

  //
  clientId?: string;

  //
  issuer?: string;

  //
  sessionTimeout?: number;

  //
  tokenEndpoint?: string;

  //
  userInfoEndpoint?: string;

  //
  authenticationRequestExtraParams?: Map<string, string>;
}

export function alb_getListenerDefaultActionAuthenticateOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "onUnauthenticatedRequest",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "scope", "", [], true, false),
    new DynamicUIProps(InputType.Number, "sessionTimeout", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "tokenEndpoint", "", [], true, false),
    new DynamicUIProps(InputType.String, "clientSecret", "", [], true, false),
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
      "authorizationEndpoint",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "clientId", "", [], true, false),
    new DynamicUIProps(InputType.String, "issuer", "", [], true, false),
  ];
}
