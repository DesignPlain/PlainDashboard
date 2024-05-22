import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond {
  // The upper limit for data storage the cache is set to use. Set as Integer.
  maximum?: number;
}

export function elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximum",
      "The upper limit for data storage the cache is set to use. Set as Integer.",
      [],
      true,
      false,
    ),
  ];
}
