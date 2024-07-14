import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData {
  // The SAPOData basic authentication credentials.
  basicAuthCredentials?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials;

  // The SAPOData OAuth type authentication credentials.
  oauthCredentials?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oauthCredentials",
      "The SAPOData OAuth type authentication credentials.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "basicAuthCredentials",
      "The SAPOData basic authentication credentials.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials_GetTypes(),
      false,
      false,
    ),
  ];
}
