import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Pubsub_LiteTopicPartitionConfigCapacity {
  // Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  PublishMibPerSec?: number;

  // Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  SubscribeMibPerSec?: number;
}

export function Pubsub_LiteTopicPartitionConfigCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "SubscribeMibPerSec",
      "Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PublishMibPerSec",
      "Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.",
      [],
      true,
      false,
    ),
  ];
}
