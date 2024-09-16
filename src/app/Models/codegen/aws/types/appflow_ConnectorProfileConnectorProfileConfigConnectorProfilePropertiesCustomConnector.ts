import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
  // A map of properties that are required to create a profile for the custom connector.
  profileProperties?: Map<string, string>;

  // The OAuth 2.0 properties required for OAuth 2.0 authentication.
  oauth2Properties?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'profileProperties',
      'A map of properties that are required to create a profile for the custom connector.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauth2Properties',
      'The OAuth 2.0 properties required for OAuth 2.0 authentication.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties_GetTypes(),
      false,
      false,
    ),
  ];
}
