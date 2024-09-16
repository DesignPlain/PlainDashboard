import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
  // The authentication type that the custom connector uses for authenticating while creating a connector profile. One of: `APIKEY`, `BASIC`, `CUSTOM`, `OAUTH2`.
  authenticationType?: string;

  // Basic credentials that are required for the authentication of the user.
  basic?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic;

  // If the connector uses the custom authentication mechanism, this holds the required credentials.
  custom?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom;

  // OAuth 2.0 credentials required for the authentication of the user.
  oauth2?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2;

  //
  apiKey?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'apiKey',
      '',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authenticationType',
      'The authentication type that the custom connector uses for authenticating while creating a connector profile. One of: `APIKEY`, `BASIC`, `CUSTOM`, `OAUTH2`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'basic',
      'Basic credentials that are required for the authentication of the user.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'custom',
      'If the connector uses the custom authentication mechanism, this holds the required credentials.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauth2',
      'OAuth 2.0 credentials required for the authentication of the user.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2_GetTypes(),
      false,
      false,
    ),
  ];
}
