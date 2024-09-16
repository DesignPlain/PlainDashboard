import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_ComputeEnvironmentEksConfiguration {
  // The Amazon Resource Name (ARN) of the Amazon EKS cluster.
  eksClusterArn?: string;

  // The namespace of the Amazon EKS cluster. AWS Batch manages pods in this namespace.
  kubernetesNamespace?: string;
}

export function batch_ComputeEnvironmentEksConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'eksClusterArn',
      'The Amazon Resource Name (ARN) of the Amazon EKS cluster.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'kubernetesNamespace',
      'The namespace of the Amazon EKS cluster. AWS Batch manages pods in this namespace.',
      () => [],
      true,
      true,
    ),
  ];
}
