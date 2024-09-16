import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  // The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
  lifecycleConfigArn?: string;

  // The ARN of the SageMaker image that the image version belongs to.
  sagemakerImageArn?: string;

  // The SageMaker Image Version Alias.
  sagemakerImageVersionAlias?: string;

  // The ARN of the image version created on the instance.
  sagemakerImageVersionArn?: string;

  // The instance type that the image version runs on.. For valid values see [SageMaker Instance Types](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html).
  instanceType?: string;
}

export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sagemakerImageArn',
      'The ARN of the SageMaker image that the image version belongs to.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sagemakerImageVersionAlias',
      'The SageMaker Image Version Alias.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sagemakerImageVersionArn',
      'The ARN of the image version created on the instance.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      'The instance type that the image version runs on.. For valid values see [SageMaker Instance Types](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lifecycleConfigArn',
      'The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.',
      () => [],
      false,
      false,
    ),
  ];
}
