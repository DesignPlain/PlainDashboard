import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ReplicatorKafkaCluster,
  msk_ReplicatorKafkaCluster_GetTypes,
} from "../types/msk_ReplicatorKafkaCluster";
import {
  msk_ReplicatorReplicationInfoList,
  msk_ReplicatorReplicationInfoList_GetTypes,
} from "../types/msk_ReplicatorReplicationInfoList";

export interface ReplicatorArgs {
  // The name of the replicator.
  replicatorName?: string;

  // The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters).
  serviceExecutionRoleArn?: string;

  //
  tags?: Map<string, string>;

  // A summary description of the replicator.
  description?: string;

  // A list of Kafka clusters which are targets of the replicator.
  kafkaClusters?: Array<msk_ReplicatorKafkaCluster>;

  // A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
  replicationInfoList?: msk_ReplicatorReplicationInfoList;
}
export class Replicator extends DS_Resource {
  // A summary description of the replicator.
  public description?: string;

  // A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
  public replicationInfoList?: msk_ReplicatorReplicationInfoList;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Replicator. Do not begin the description with "An", "The", "Defines", "Indicates", or "Specifies," as these are verbose. In other words, "Indicates the amount of storage," can be rewritten as "Amount of storage," without losing any information.
  public arn?: string;

  //
  public currentVersion?: string;

  // A list of Kafka clusters which are targets of the replicator.
  public kafkaClusters?: Array<msk_ReplicatorKafkaCluster>;

  // The name of the replicator.
  public replicatorName?: string;

  // The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters).
  public serviceExecutionRoleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "replicatorName",
        "The name of the replicator.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceExecutionRoleArn",
        "The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A summary description of the replicator.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kafkaClusters",
        "A list of Kafka clusters which are targets of the replicator.",
        () => msk_ReplicatorKafkaCluster_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "replicationInfoList",
        "A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.",
        () => msk_ReplicatorReplicationInfoList_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
