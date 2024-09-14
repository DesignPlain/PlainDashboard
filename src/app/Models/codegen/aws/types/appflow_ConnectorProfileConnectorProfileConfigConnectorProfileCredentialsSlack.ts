import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
  //
  accessToken?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessToken",
      "",
      () => [],
      false,
      false,
    ),
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
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
