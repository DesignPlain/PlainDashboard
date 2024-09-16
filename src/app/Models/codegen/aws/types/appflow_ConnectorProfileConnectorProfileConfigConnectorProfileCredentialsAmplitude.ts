import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
  // The Secret Access Key portion of the credentials.
  secretKey?: string;

  //
  apiKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretKey',
      'The Secret Access Key portion of the credentials.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'apiKey', '', () => [], true, false),
  ];
}
