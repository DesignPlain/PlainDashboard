import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ReplicatorReplicationInfoListConsumerGroupReplication,
  msk_ReplicatorReplicationInfoListConsumerGroupReplication_GetTypes,
} from "./msk_ReplicatorReplicationInfoListConsumerGroupReplication";
import {
  msk_ReplicatorReplicationInfoListTopicReplication,
  msk_ReplicatorReplicationInfoListTopicReplication_GetTypes,
} from "./msk_ReplicatorReplicationInfoListTopicReplication";

export interface msk_ReplicatorReplicationInfoList {
  //
  targetKafkaClusterAlias?: string;

  // The ARN of the target Kafka cluster.
  targetKafkaClusterArn?: string;

  // Configuration relating to topic replication.
  topicReplications?: Array<msk_ReplicatorReplicationInfoListTopicReplication>;

  // Configuration relating to consumer group replication.
  consumerGroupReplications?: Array<msk_ReplicatorReplicationInfoListConsumerGroupReplication>;

  //
  sourceKafkaClusterAlias?: string;

  // The ARN of the source Kafka cluster.
  sourceKafkaClusterArn?: string;

  // The type of compression to use writing records to target Kafka cluster.
  targetCompressionType?: string;
}

export function msk_ReplicatorReplicationInfoList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetKafkaClusterAlias",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetKafkaClusterArn",
      "The ARN of the target Kafka cluster.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "topicReplications",
      "Configuration relating to topic replication.",
      () => msk_ReplicatorReplicationInfoListTopicReplication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "consumerGroupReplications",
      "Configuration relating to consumer group replication.",
      () =>
        msk_ReplicatorReplicationInfoListConsumerGroupReplication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceKafkaClusterAlias",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceKafkaClusterArn",
      "The ARN of the source Kafka cluster.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetCompressionType",
      "The type of compression to use writing records to target Kafka cluster.",
      () => [],
      true,
      true,
    ),
  ];
}
