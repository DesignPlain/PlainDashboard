import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AwsClusterControlPlaneConfigEncryption {
  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  kmsKeyArn?: string;
}

export function container_AwsClusterControlPlaneConfigEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      'The ARN of the AWS KMS key used to encrypt cluster configuration.',
      () => [],
      true,
      false,
    ),
  ];
}
