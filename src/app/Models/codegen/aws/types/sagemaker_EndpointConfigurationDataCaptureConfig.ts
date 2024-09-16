import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader,
  sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader_GetTypes,
} from './sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader';
import {
  sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption,
  sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption_GetTypes,
} from './sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption';

export interface sagemaker_EndpointConfigurationDataCaptureConfig {
  // Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt the captured data on Amazon S3.
  kmsKeyId?: string;

  // The content type headers to capture. Fields are documented below.
  captureContentTypeHeader?: sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;

  // Specifies what data to capture. Fields are documented below.
  captureOptions?: Array<sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption>;

  // The URL for S3 location where the captured data is stored.
  destinationS3Uri?: string;

  // Flag to enable data capture. Defaults to `false`.
  enableCapture?: boolean;

  // Portion of data to capture. Should be between 0 and 100.
  initialSamplingPercentage?: number;
}

export function sagemaker_EndpointConfigurationDataCaptureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt the captured data on Amazon S3.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'captureContentTypeHeader',
      'The content type headers to capture. Fields are documented below.',
      () =>
        sagemaker_EndpointConfigurationDataCaptureConfigCaptureContentTypeHeader_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'captureOptions',
      'Specifies what data to capture. Fields are documented below.',
      () =>
        sagemaker_EndpointConfigurationDataCaptureConfigCaptureOption_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationS3Uri',
      'The URL for S3 location where the captured data is stored.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableCapture',
      'Flag to enable data capture. Defaults to `false`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'initialSamplingPercentage',
      'Portion of data to capture. Should be between 0 and 100.',
      () => [],
      true,
      true,
    ),
  ];
}
