import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DeviceFleetOutputConfig {
  // The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
  kmsKeyId?: string;

  // The Amazon Simple Storage (S3) bucker URI.
  s3OutputLocation?: string;
}

export function sagemaker_DeviceFleetOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3OutputLocation",
      "The Amazon Simple Storage (S3) bucker URI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.",
      [],
      false,
      false,
    ),
  ];
}
