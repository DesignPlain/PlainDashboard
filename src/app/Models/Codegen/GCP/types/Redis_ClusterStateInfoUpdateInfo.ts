import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_ClusterStateInfoUpdateInfo {
  // Target number of replica nodes per shard.
  TargetReplicaCount?: number;

  // Target number of shards for redis cluster.
  TargetShardCount?: number;
}

export function Redis_ClusterStateInfoUpdateInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TargetReplicaCount",
      "Target number of replica nodes per shard.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetShardCount",
      "Target number of shards for redis cluster.",
      [],
      false,
      false,
    ),
  ];
}
