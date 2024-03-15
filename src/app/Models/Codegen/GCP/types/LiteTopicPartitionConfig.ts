import { LiteTopicPartitionConfigCapacity } from "./LiteTopicPartitionConfigCapacity";

export interface LiteTopicPartitionConfig {
  /*
The capacity configuration.
Structure is documented below.
*/
  Capacity?: LiteTopicPartitionConfigCapacity;

  // The number of partitions in the topic. Must be at least 1.
  Count?: number;
}
