import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface memorydb_SnapshotClusterConfiguration {
  // Compute and memory capacity of the nodes in the cluster.
  nodeType?: string;

  // Number of shards in the cluster.
  numShards?: number;

  // Name of the parameter group associated with the cluster.
  parameterGroupName?: string;

  // Number of days for which MemoryDB retains automatic snapshots before deleting them.
  snapshotRetentionLimit?: number;

  // The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of the shard.
  snapshotWindow?: string;

  // ARN of the SNS topic to which cluster notifications are sent.
  topicArn?: string;

  // The VPC in which the cluster exists.
  vpcId?: string;

  // Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Version number of the Redis engine used by the cluster.
  engineVersion?: string;

  // The weekly time range during which maintenance on the cluster is performed.
  maintenanceWindow?: string;

  // Port number on which the cluster accepts connections.
  port?: number;

  // Name of the subnet group used by the cluster.
  subnetGroupName?: string;

  // Description for the cluster.
  description?: string;
}

export function memorydb_SnapshotClusterConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "ARN of the SNS topic to which cluster notifications are sent.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number on which the cluster accepts connections.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetGroupName",
      "Name of the subnet group used by the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parameterGroupName",
      "Name of the parameter group associated with the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "snapshotRetentionLimit",
      "Number of days for which MemoryDB retains automatic snapshots before deleting them.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotWindow",
      "The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of the shard.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "engineVersion",
      "Version number of the Redis engine used by the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceWindow",
      "The weekly time range during which maintenance on the cluster is performed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description for the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "Compute and memory capacity of the nodes in the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numShards",
      "Number of shards in the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The VPC in which the cluster exists.",
      () => [],
      false,
      false,
    ),
  ];
}
