import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_NodePoolNetworkConfigNetworkPerformanceConfig {
  // Specifies the total network bandwidth tier for the NodePool.
  totalEgressBandwidthTier?: string;
}

export function container_NodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalEgressBandwidthTier",
      "Specifies the total network bandwidth tier for the NodePool.",
      () => [],
      true,
      false,
    ),
  ];
}
