import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
  //
  clientSecret?: string;

  //
  oauthRequest?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest;

  //
  accessToken?: string;

  //
  clientId?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo_GetTypes(): DynamicUIProps[] {
  return [
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
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest_GetTypes(),
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
  ];
}
