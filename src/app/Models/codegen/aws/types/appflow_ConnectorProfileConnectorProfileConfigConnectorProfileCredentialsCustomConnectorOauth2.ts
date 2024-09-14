import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
  //
  refreshToken?: string;

  //
  accessToken?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthRequest",
      "",
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest_GetTypes(),
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
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
