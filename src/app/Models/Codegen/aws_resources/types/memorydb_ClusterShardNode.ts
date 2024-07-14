import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  memorydb_ClusterShardNodeEndpoint,
  memorydb_ClusterShardNodeEndpoint_GetTypes,
} from "./memorydb_ClusterShardNodeEndpoint";

export interface memorydb_ClusterShardNode {
  // The date and time when the node was created. Example: `2022-01-01T21:00:00Z`.
  createTime?: string;

  //
  endpoints?: Array<memorydb_ClusterShardNodeEndpoint>;

  // Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // The Availability Zone in which the node resides.
  availabilityZone?: string;
}

export function memorydb_ClusterShardNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The date and time when the node was created. Example: `2022-01-01T21:00:00Z`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "endpoints",
      "",
      memorydb_ClusterShardNodeEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the cluster. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone in which the node resides.",
      [],
      false,
      false,
    ),
  ];
}
