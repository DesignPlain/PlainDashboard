import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest {
  // The code provided by the connector when it has been authenticated via the connected app.
  authCode?: string;

  // The URL to which the authentication server redirects the browser after authorization has been granted.
  redirectUri?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authCode",
      "The code provided by the connector when it has been authenticated via the connected app.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectUri",
      "The URL to which the authentication server redirects the browser after authorization has been granted.",
      [],
      false,
      false,
    ),
  ];
}
