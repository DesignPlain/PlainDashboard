import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig {
  // The Amazon S3 bucket to send the core dump to.
  destinationS3Uri?: string;

  // The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption.
  kmsKeyId?: string;
}

export function sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationS3Uri",
      "The Amazon S3 bucket to send the core dump to.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption.",
      [],
      true,
      true,
    ),
  ];
}
