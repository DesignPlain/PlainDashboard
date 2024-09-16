import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeSourceParametersActivemqBrokerParametersCredentials {
  // The ARN of the Secrets Manager secret containing the credentials.
  basicAuth?: string;
}

export function pipes_PipeSourceParametersActivemqBrokerParametersCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'basicAuth',
      'The ARN of the Secrets Manager secret containing the credentials.',
      () => [],
      true,
      false,
    ),
  ];
}
