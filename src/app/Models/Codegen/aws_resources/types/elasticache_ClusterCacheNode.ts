import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_ClusterCacheNode {
  //
  address?: string;

  // Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource.
  availabilityZone?: string;

  //
  id?: string;

  //
  outpostArn?: string;

  // The port number on which each of the cache nodes will accept connections. For Memcached the default is 11211, and for Redis the default port is 6379. Cannot be provided with `replication_group_id`. Changing this value will re-create the resource.
  port?: number;
}

export function elasticache_ClusterCacheNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "outpostArn", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number on which each of the cache nodes will accept connections. For Memcached the default is 11211, and for Redis the default port is 6379. Cannot be provided with `replication_group_id`. Changing this value will re-create the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "address", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", [], false, false),
  ];
}
