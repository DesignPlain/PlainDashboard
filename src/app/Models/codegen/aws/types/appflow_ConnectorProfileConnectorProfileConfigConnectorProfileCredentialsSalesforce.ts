import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
  //
  oauth2GrantType?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest;

  //
  refreshToken?: string;

  //
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
      'oauth2GrantType',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauthRequest',
      '',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'refreshToken',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessToken',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientCredentialsArn',
      'The secret manager ARN, which contains the client ID and client secret of the connected app.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'jwtToken',
      'A JSON web token (JWT) that authorizes access to Salesforce records.',
      () => [],
      false,
      false,
    ),
  ];
}
