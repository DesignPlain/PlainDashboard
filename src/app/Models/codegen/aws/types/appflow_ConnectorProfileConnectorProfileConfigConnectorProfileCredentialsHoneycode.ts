import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode {
  //
  accessToken?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest;

  //
  refreshToken?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode_GetTypes(): DynamicUIProps[] {
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
    new DynamicUIProps(
      InputType.Object,
      'oauthRequest',
      '',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
