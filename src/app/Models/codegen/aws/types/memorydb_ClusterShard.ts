import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  memorydb_ClusterShardNode,
  memorydb_ClusterShardNode_GetTypes,
} from "./memorydb_ClusterShardNode";

export interface memorydb_ClusterShard {
  // Number of individual nodes in this shard.
  numNodes?: number;

  // Keyspace for this shard. Example: `0-16383`.
  slots?: string;

  // Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Set of nodes in this shard.
  nodes?: Array<memorydb_ClusterShardNode>;
}

export function memorydb_ClusterShard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodes",
      "Set of nodes in this shard.",
      () => memorydb_ClusterShardNode_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numNodes",
      "Number of individual nodes in this shard.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slots",
      "Keyspace for this shard. Example: `0-16383`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      () => [],
      false,
      false,
    ),
  ];
}
