import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ReplicatorKafkaClusterAmazonMskCluster {
  // The ARN of an Amazon MSK cluster.
  mskClusterArn?: string;
}

export function msk_ReplicatorKafkaClusterAmazonMskCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mskClusterArn',
      'The ARN of an Amazon MSK cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
