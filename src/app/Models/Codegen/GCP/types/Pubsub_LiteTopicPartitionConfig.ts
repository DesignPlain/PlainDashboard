import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pubsub_LiteTopicPartitionConfigCapacity,
  pubsub_LiteTopicPartitionConfigCapacity_GetTypes,
} from "./pubsub_LiteTopicPartitionConfigCapacity";

export interface pubsub_LiteTopicPartitionConfig {
  /*
The capacity configuration.
Structure is documented below.
*/
  capacity?: pubsub_LiteTopicPartitionConfigCapacity;

  // The number of partitions in the topic. Must be at least 1.
  count?: number;
}

export function pubsub_LiteTopicPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "capacity",
      "The capacity configuration.\nStructure is documented below.",
      pubsub_LiteTopicPartitionConfigCapacity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of partitions in the topic. Must be at least 1.",
      [],
      true,
      false,
    ),
  ];
}
