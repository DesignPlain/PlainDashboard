import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
  //
  apiKey?: string;

  //
  apiSecretKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'apiKey', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'apiSecretKey',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
