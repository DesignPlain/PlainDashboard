import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface memorydb_getSnapshotClusterConfiguration {
  // Description for the cluster.
  description?: string;

  // The weekly time range during which maintenance on the cluster is performed.
  maintenanceWindow?: string;

  // Name of the snapshot.
  name?: string;

  // Compute and memory capacity of the nodes in the cluster.
  nodeType?: string;

  // Number of days for which MemoryDB retains automatic snapshots before deleting them.
  snapshotRetentionLimit?: number;

  // Name of the subnet group used by the cluster.
  subnetGroupName?: string;

  // The VPC in which the cluster exists.
  vpcId?: string;

  // Version number of the Redis engine used by the cluster.
  engineVersion?: string;

  // Number of shards in the cluster.
  numShards?: number;

  // Name of the parameter group associated with the cluster.
  parameterGroupName?: string;

  // Port number on which the cluster accepts connections.
  port?: number;

  // The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of the shard.
  snapshotWindow?: string;

  // ARN of the SNS topic to which cluster notifications are sent.
  topicArn?: string;
}

export function memorydb_getSnapshotClusterConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description for the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceWindow",
      "The weekly time range during which maintenance on the cluster is performed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetGroupName",
      "Name of the subnet group used by the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The VPC in which the cluster exists.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "engineVersion",
      "Version number of the Redis engine used by the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numShards",
      "Number of shards in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "ARN of the SNS topic to which cluster notifications are sent.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the snapshot.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "Compute and memory capacity of the nodes in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "snapshotRetentionLimit",
      "Number of days for which MemoryDB retains automatic snapshots before deleting them.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parameterGroupName",
      "Name of the parameter group associated with the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number on which the cluster accepts connections.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotWindow",
      "The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of the shard.",
      [],
      true,
      false,
    ),
  ];
}
