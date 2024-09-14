import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redis_ClusterStateInfoUpdateInfo {
  // Target number of replica nodes per shard.
  targetReplicaCount?: number;

  // Target number of shards for redis cluster.
  targetShardCount?: number;
}

export function redis_ClusterStateInfoUpdateInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetReplicaCount",
      "Target number of replica nodes per shard.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetShardCount",
      "Target number of shards for redis cluster.",
      () => [],
      false,
      false,
    ),
  ];
}
