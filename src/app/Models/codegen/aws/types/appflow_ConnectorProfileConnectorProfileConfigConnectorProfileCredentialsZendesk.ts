import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
  //
  accessToken?: string;

  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk_GetTypes(): DynamicUIProps[] {
  return [
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
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
