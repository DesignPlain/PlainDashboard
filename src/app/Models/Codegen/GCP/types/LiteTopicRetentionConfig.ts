export interface LiteTopicRetentionConfig {
  /*
The provisioned storage, in bytes, per partition. If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.
*/
  PerPartitionBytes?: string;

  /*
How long a published message is retained. If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".
*/
  Period?: string;
}
