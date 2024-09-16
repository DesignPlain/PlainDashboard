import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration {
  // Enables or disables the Secrets Manager configuration.
  enabled?: boolean;

  // The ARN of the role the stream assumes.
  roleArn?: string;

  // The ARN of the Secrets Manager secret. This value is required if `enabled` is true.
  secretArn?: string;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables or disables the Secrets Manager configuration.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the role the stream assumes.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretArn',
      'The ARN of the Secrets Manager secret. This value is required if `enabled` is true.',
      () => [],
      false,
      false,
    ),
  ];
}
