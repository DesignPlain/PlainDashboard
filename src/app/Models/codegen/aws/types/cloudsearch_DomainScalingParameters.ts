import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudsearch_DomainScalingParameters {
  // The instance type that you want to preconfigure for your domain. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ScalingParameters.html) for valid values.
  desiredInstanceType?: string;

  // The number of partitions you want to preconfigure for your domain. Only valid when you select `search.2xlarge` as the instance type.
  desiredPartitionCount?: number;

  // The number of replicas you want to preconfigure for each index partition.
  desiredReplicationCount?: number;
}

export function cloudsearch_DomainScalingParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'desiredInstanceType',
      'The instance type that you want to preconfigure for your domain. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ScalingParameters.html) for valid values.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'desiredPartitionCount',
      'The number of partitions you want to preconfigure for your domain. Only valid when you select `search.2xlarge` as the instance type.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'desiredReplicationCount',
      'The number of replicas you want to preconfigure for each index partition.',
      () => [],
      false,
      false,
    ),
  ];
}
