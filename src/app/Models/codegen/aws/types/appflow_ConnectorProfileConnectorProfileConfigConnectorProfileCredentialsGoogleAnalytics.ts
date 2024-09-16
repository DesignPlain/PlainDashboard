import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
  //
  refreshToken?: string;

  //
  accessToken?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(InputType.String, 'clientId', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'clientSecret',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauthRequest',
      '',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
