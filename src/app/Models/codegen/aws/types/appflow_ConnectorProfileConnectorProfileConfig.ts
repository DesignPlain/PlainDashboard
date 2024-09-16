import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties_GetTypes,
} from './appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties';

export interface appflow_ConnectorProfileConnectorProfileConfig {
  // The connector-specific credentials required by each connector. See Connector Profile Credentials for more details.
  connectorProfileCredentials?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials;

  // The connector-specific properties of the profile configuration. See Connector Profile Properties for more details.
  connectorProfileProperties?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties;
}

export function appflow_ConnectorProfileConnectorProfileConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'connectorProfileCredentials',
      'The connector-specific credentials required by each connector. See Connector Profile Credentials for more details.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'connectorProfileProperties',
      'The connector-specific properties of the profile configuration. See Connector Profile Properties for more details.',
      () =>
        appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties_GetTypes(),
      true,
      false,
    ),
  ];
}
