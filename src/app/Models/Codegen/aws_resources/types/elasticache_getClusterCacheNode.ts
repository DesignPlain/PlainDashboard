import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticache_getClusterCacheNode {
  //
  address?: string;

  // Availability Zone for the cache cluster.
  availabilityZone?: string;

  //
  id?: string;

  //
  outpostArn?: string;

  /*
The port number on which each of the cache nodes will
accept connections.
*/
  port?: number;
}

export function elasticache_getClusterCacheNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "address", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "Availability Zone for the cache cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", [], true, false),
    new DynamicUIProps(InputType.String, "outpostArn", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number on which each of the cache nodes will\naccept connections.",
      [],
      true,
      false,
    ),
  ];
}
