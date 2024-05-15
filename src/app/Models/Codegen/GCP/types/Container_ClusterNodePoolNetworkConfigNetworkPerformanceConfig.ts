import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  // Specifies the total network bandwidth tier for the NodePool.
  TotalEgressBandwidthTier?: string;
}

export function Container_ClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TotalEgressBandwidthTier",
      "Specifies the total network bandwidth tier for the NodePool.",
      [],
      true,
      false,
    ),
  ];
}
