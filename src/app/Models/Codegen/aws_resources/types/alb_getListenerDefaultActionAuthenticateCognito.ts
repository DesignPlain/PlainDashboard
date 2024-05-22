import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_getListenerDefaultActionAuthenticateCognito {
  //
  userPoolDomain?: string;

  //
  authenticationRequestExtraParams?: Map<string, string>;

  //
  onUnauthenticatedRequest?: string;

  //
  scope?: string;

  //
  sessionCookieName?: string;

  //
  sessionTimeout?: number;

  //
  userPoolArn?: string;

  //
  userPoolClientId?: string;
}

export function alb_getListenerDefaultActionAuthenticateCognito_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "sessionTimeout", "", [], true, false),
    new DynamicUIProps(InputType.String, "userPoolArn", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "userPoolClientId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "userPoolDomain", "", [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "authenticationRequestExtraParams",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
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
  ];
}
