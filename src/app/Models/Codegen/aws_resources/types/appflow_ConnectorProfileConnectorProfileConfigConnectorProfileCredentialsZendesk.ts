import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
  // The access token used to access the connector on your behalf.
  accessToken?: string;

  // The identifier for the desired client.
  clientId?: string;

  // The client secret used by the OAuth client to authenticate to the authorization server.
  clientSecret?: string;

  // Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessToken",
      "The access token used to access the connector on your behalf.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The identifier for the desired client.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "The client secret used by the OAuth client to authenticate to the authorization server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthRequest",
      "Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
