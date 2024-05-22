import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticache_GlobalReplicationGroupGlobalNodeGroup {
  // The ID of the global node group.
  globalNodeGroupId?: string;

  // The keyspace for this node group.
  slots?: string;
}

export function elasticache_GlobalReplicationGroupGlobalNodeGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "globalNodeGroupId",
      "The ID of the global node group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slots",
      "The keyspace for this node group.",
      [],
      false,
      false,
    ),
  ];
}
