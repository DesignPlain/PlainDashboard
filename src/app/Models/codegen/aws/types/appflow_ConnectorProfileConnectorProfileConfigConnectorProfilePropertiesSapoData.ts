import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData {
  //
  privateLinkServiceName?: string;

  // The location of the SAPOData resource.
  applicationHostUrl?: string;

  // The application path to catalog service.
  applicationServicePath?: string;

  // The client number for the client creating the connection.
  clientNumber?: string;

  // The logon language of SAPOData instance.
  logonLanguage?: string;

  // The SAPOData OAuth properties required for OAuth type authentication.
  oauthProperties?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties;

  // The port number of the SAPOData instance.
  portNumber?: number;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationServicePath",
      "The application path to catalog service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientNumber",
      "The client number for the client creating the connection.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logonLanguage",
      "The logon language of SAPOData instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthProperties",
      "The SAPOData OAuth properties required for OAuth type authentication.",
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "portNumber",
      "The port number of the SAPOData instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateLinkServiceName",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationHostUrl",
      "The location of the SAPOData resource.",
      () => [],
      true,
      false,
    ),
  ];
}
