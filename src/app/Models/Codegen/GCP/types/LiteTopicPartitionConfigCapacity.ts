export interface LiteTopicPartitionConfigCapacity {
  // Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  PublishMibPerSec?: number;

  // Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  SubscribeMibPerSec?: number;
}
