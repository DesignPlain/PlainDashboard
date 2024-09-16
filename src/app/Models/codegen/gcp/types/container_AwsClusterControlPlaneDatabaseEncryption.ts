import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AwsClusterControlPlaneDatabaseEncryption {
  // The ARN of the AWS KMS key used to encrypt cluster secrets.
  kmsKeyArn?: string;
}

export function container_AwsClusterControlPlaneDatabaseEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      'The ARN of the AWS KMS key used to encrypt cluster secrets.',
      () => [],
      true,
      true,
    ),
  ];
}
