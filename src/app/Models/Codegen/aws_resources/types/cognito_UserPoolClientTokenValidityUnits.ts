import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolClientTokenValidityUnits {
  // Time unit in for the value in `refresh_token_validity`, defaults to `days`.
  refreshToken?: string;

  // Time unit in for the value in `access_token_validity`, defaults to `hours`.
  accessToken?: string;

  // Time unit in for the value in `id_token_validity`, defaults to `hours`.
  idToken?: string;
}

export function cognito_UserPoolClientTokenValidityUnits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "refreshToken",
      "Time unit in for the value in `refresh_token_validity`, defaults to `days`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessToken",
      "Time unit in for the value in `access_token_validity`, defaults to `hours`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "idToken",
      "Time unit in for the value in `id_token_validity`, defaults to `hours`.",
      [],
      false,
      false,
    ),
  ];
}
