import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials {
  // The ARN of the Secrets Manager secret containing the credentials.
  clientCertificateTlsAuth?: string;

  // The ARN of the Secrets Manager secret containing the credentials.
  saslScram512Auth?: string;
}

export function pipes_PipeSourceParametersManagedStreamingKafkaParametersCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clientCertificateTlsAuth',
      'The ARN of the Secrets Manager secret containing the credentials.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'saslScram512Auth',
      'The ARN of the Secrets Manager secret containing the credentials.',
      () => [],
      false,
      false,
    ),
  ];
}
