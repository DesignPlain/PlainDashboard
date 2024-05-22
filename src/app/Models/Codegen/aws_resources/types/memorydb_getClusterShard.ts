import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  memorydb_getClusterShardNode,
  memorydb_getClusterShardNode_GetTypes,
} from "./memorydb_getClusterShardNode";

export interface memorydb_getClusterShard {
  // Keyspace for this shard. Example: `0-16383`.
  slots?: string;

  // Name of the cluster.
  name?: string;

  // Set of nodes in this shard.
  nodes?: Array<memorydb_getClusterShardNode>;

  // Number of individual nodes in this shard.
  numNodes?: number;
}

export function memorydb_getClusterShard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "slots",
      "Keyspace for this shard. Example: `0-16383`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodes",
      "Set of nodes in this shard.",
      memorydb_getClusterShardNode_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numNodes",
      "Number of individual nodes in this shard.",
      [],
      true,
      false,
    ),
  ];
}
