import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials {
  //
  accessToken?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest;

  //
  refreshToken?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "clientId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthRequest",
      "",
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "refreshToken",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessToken",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
