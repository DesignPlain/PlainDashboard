import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials {
  // Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest;

  // The refresh token used to refresh an expired access token.
  refreshToken?: string;

  // The access token used to access the connector on your behalf.
  accessToken?: string;

  // The identifier for the desired client.
  clientId?: string;

  // The client secret used by the OAuth client to authenticate to the authorization server.
  clientSecret?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oauthRequest",
      "Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "refreshToken",
      "The refresh token used to refresh an expired access token.",
      [],
      false,
      false,
    ),
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
  ];
}
