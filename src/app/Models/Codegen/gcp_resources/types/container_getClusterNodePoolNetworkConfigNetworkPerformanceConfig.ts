import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  // Specifies the total network bandwidth tier for the NodePool.
  totalEgressBandwidthTier?: string;
}

export function container_getClusterNodePoolNetworkConfigNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalEgressBandwidthTier",
      "Specifies the total network bandwidth tier for the NodePool.",
      [],
      true,
      false,
    ),
  ];
}
