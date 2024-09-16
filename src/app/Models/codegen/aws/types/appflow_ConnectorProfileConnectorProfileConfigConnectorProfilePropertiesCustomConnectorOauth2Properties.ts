import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
  // Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.
  tokenUrlCustomProperties?: Map<string, string>;

  //
  oauth2GrantType?: string;

  //
  tokenUrl?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'tokenUrlCustomProperties',
      'Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'oauth2GrantType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'tokenUrl', '', () => [], true, false),
  ];
}
