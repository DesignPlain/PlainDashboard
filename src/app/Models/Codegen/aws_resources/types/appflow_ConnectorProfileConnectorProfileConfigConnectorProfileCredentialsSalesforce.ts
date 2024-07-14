import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
  // The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication. One of: `AUTHORIZATION_CODE`, `CLIENT_CREDENTIALS`.
  oauth2GrantType?: string;

  // Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest;

  // The refresh token used to refresh an expired access token.
  refreshToken?: string;

  // The access token used to access the connector on your behalf.
  accessToken?: string;

  // The secret manager ARN, which contains the client ID and client secret of the connected app.
  clientCredentialsArn?: string;

  // A JSON web token (JWT) that authorizes access to Salesforce records.
  jwtToken?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauth2GrantType",
      "The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication. One of: `AUTHORIZATION_CODE`, `CLIENT_CREDENTIALS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauthRequest",
      "Used by select connectors for which the OAuth workflow is supported. See OAuth Request for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest_GetTypes(),
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
      "clientCredentialsArn",
      "The secret manager ARN, which contains the client ID and client secret of the connected app.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jwtToken",
      "A JSON web token (JWT) that authorizes access to Salesforce records.",
      [],
      false,
      false,
    ),
  ];
}
