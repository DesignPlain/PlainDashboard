import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pubsub_LiteTopicPartitionConfigCapacity {
  // Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  publishMibPerSec?: number;

  // Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  subscribeMibPerSec?: number;
}

export function pubsub_LiteTopicPartitionConfigCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'publishMibPerSec',
      'Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'subscribeMibPerSec',
      'Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.',
      () => [],
      true,
      false,
    ),
  ];
}
