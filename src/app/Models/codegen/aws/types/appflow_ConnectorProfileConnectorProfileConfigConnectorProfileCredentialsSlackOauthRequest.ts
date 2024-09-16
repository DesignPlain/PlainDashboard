import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest {
  // The code provided by the connector when it has been authenticated via the connected app.
  authCode?: string;

  // The URL to which the authentication server redirects the browser after authorization has been granted.
  redirectUri?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'redirectUri',
      'The URL to which the authentication server redirects the browser after authorization has been granted.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authCode',
      'The code provided by the connector when it has been authenticated via the connected app.',
      () => [],
      false,
      false,
    ),
  ];
}
