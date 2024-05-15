import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionApiConfig {
  /*
Level of login required to access this resource.
Default value is `LOGIN_OPTIONAL`.
Possible values are: `LOGIN_OPTIONAL`, `LOGIN_ADMIN`, `LOGIN_REQUIRED`.
*/
  Login?: string;

  // Path to the script from the application root directory.
  Script?: string;

  /*
Security (HTTPS) enforcement for this URL.
Possible values are: `SECURE_DEFAULT`, `SECURE_NEVER`, `SECURE_OPTIONAL`, `SECURE_ALWAYS`.
*/
  SecurityLevel?: string;

  // URL to serve the endpoint at.
  Url?: string;

  /*
Action to take when users access resources that require authentication.
Default value is `AUTH_FAIL_ACTION_REDIRECT`.
Possible values are: `AUTH_FAIL_ACTION_REDIRECT`, `AUTH_FAIL_ACTION_UNAUTHORIZED`.
*/
  AuthFailAction?: string;
}

export function Appengine_FlexibleAppVersionApiConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecurityLevel",
      "Security (HTTPS) enforcement for this URL.\nPossible values are: `SECURE_DEFAULT`, `SECURE_NEVER`, `SECURE_OPTIONAL`, `SECURE_ALWAYS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "URL to serve the endpoint at.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AuthFailAction",
      "Action to take when users access resources that require authentication.\nDefault value is `AUTH_FAIL_ACTION_REDIRECT`.\nPossible values are: `AUTH_FAIL_ACTION_REDIRECT`, `AUTH_FAIL_ACTION_UNAUTHORIZED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Login",
      "Level of login required to access this resource.\nDefault value is `LOGIN_OPTIONAL`.\nPossible values are: `LOGIN_OPTIONAL`, `LOGIN_ADMIN`, `LOGIN_REQUIRED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Script",
      "Path to the script from the application root directory.",
      [],
      true,
      false,
    ),
  ];
}
