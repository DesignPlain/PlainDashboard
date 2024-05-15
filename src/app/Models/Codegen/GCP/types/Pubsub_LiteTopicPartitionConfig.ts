import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Pubsub_LiteTopicPartitionConfigCapacity,
  Pubsub_LiteTopicPartitionConfigCapacity_GetTypes,
} from "./Pubsub_LiteTopicPartitionConfigCapacity";

export interface Pubsub_LiteTopicPartitionConfig {
  /*
The capacity configuration.
Structure is documented below.
*/
  Capacity?: Pubsub_LiteTopicPartitionConfigCapacity;

  // The number of partitions in the topic. Must be at least 1.
  Count?: number;
}

export function Pubsub_LiteTopicPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Capacity",
      "The capacity configuration.\nStructure is documented below.",
      Pubsub_LiteTopicPartitionConfigCapacity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of partitions in the topic. Must be at least 1.",
      [],
      true,
      false,
    ),
  ];
}
