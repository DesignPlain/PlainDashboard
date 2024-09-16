import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_ModelPrimaryContainerModelDataSource,
  sagemaker_ModelPrimaryContainerModelDataSource_GetTypes,
} from './sagemaker_ModelPrimaryContainerModelDataSource';
import {
  sagemaker_ModelPrimaryContainerImageConfig,
  sagemaker_ModelPrimaryContainerImageConfig_GetTypes,
} from './sagemaker_ModelPrimaryContainerImageConfig';

export interface sagemaker_ModelPrimaryContainer {
  // The URL for the S3 location where model artifacts are stored.
  modelDataUrl?: string;

  // The Amazon Resource Name (ARN) of the model package to use to create the model.
  modelPackageName?: string;

  // The DNS host name for the container.
  containerHostname?: string;

  /*
Environment variables for the Docker container.
A list of key value pairs.
*/
  environment?: Map<string, string>;

  // The registry path where the inference code image is stored in Amazon ECR.
  image?: string;

  // Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). For more information see [Using a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html). see Image Config.
  imageConfig?: sagemaker_ModelPrimaryContainerImageConfig;

  // The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.
  mode?: string;

  // The location of model data to deploy. Use this for uncompressed model deployment. For information about how to deploy an uncompressed model, see [Deploying uncompressed models](https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference-uncompressed.html) in the _AWS SageMaker Developer Guide_.
  modelDataSource?: sagemaker_ModelPrimaryContainerModelDataSource;
}

export function sagemaker_ModelPrimaryContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'modelDataSource',
      'The location of model data to deploy. Use this for uncompressed model deployment. For information about how to deploy an uncompressed model, see [Deploying uncompressed models](https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference-uncompressed.html) in the _AWS SageMaker Developer Guide_.',
      () => sagemaker_ModelPrimaryContainerModelDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'modelDataUrl',
      'The URL for the S3 location where model artifacts are stored.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'modelPackageName',
      'The Amazon Resource Name (ARN) of the model package to use to create the model.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'containerHostname',
      'The DNS host name for the container.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'environment',
      'Environment variables for the Docker container.\nA list of key value pairs.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'image',
      'The registry path where the inference code image is stored in Amazon ECR.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageConfig',
      'Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). For more information see [Using a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html). see Image Config.',
      () => sagemaker_ModelPrimaryContainerImageConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      'The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.',
      () => [],
      false,
      true,
    ),
  ];
}
