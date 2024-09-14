import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond {
  //
  maximum?: number;

  //
  minimum?: number;
}

export function elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "maximum", "", () => [], false, false),
    new DynamicUIProps(InputType.Number, "minimum", "", () => [], false, false),
  ];
}
