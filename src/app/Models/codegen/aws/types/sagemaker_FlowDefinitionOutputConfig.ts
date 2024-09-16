import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_FlowDefinitionOutputConfig {
  // The Amazon Key Management Service (KMS) key ARN for server-side encryption.
  kmsKeyId?: string;

  // The Amazon S3 path where the object containing human output will be made available.
  s3OutputPath?: string;
}

export function sagemaker_FlowDefinitionOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'The Amazon Key Management Service (KMS) key ARN for server-side encryption.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      's3OutputPath',
      'The Amazon S3 path where the object containing human output will be made available.',
      () => [],
      true,
      true,
    ),
  ];
}
