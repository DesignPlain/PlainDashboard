import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig_GetTypes,
} from './sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig';

export interface sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig {
  // The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
  kmsKeyId?: string;

  // Specifies the configuration for notifications of inference results for asynchronous inference.
  notificationConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;

  // The Amazon S3 location to upload failure inference responses to.
  s3FailurePath?: string;

  // The Amazon S3 location to upload inference responses to.
  s3OutputPath?: string;
}

export function sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'notificationConfig',
      'Specifies the configuration for notifications of inference results for asynchronous inference.',
      () =>
        sagemaker_EndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      's3FailurePath',
      'The Amazon S3 location to upload failure inference responses to.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      's3OutputPath',
      'The Amazon S3 location to upload inference responses to.',
      () => [],
      true,
      true,
    ),
  ];
}
