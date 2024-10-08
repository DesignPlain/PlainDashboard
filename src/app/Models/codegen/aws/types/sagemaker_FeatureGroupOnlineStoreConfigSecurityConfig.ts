import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig {
  // The ID of the AWS Key Management Service (AWS KMS) key that SageMaker Feature Store uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.
  kmsKeyId?: string;
}

export function sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'The ID of the AWS Key Management Service (AWS KMS) key that SageMaker Feature Store uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.',
      () => [],
      false,
      true,
    ),
  ];
}
