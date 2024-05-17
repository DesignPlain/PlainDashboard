import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceTemplateNetworkPerformanceConfig {
  // The egress bandwidth tier to enable. Possible values: TIER_1, DEFAULT
  TotalEgressBandwidthTier?: string;
}

export function Compute_RegionInstanceTemplateNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TotalEgressBandwidthTier",
      "The egress bandwidth tier to enable. Possible values: TIER_1, DEFAULT",
      [],
      true,
      true,
    ),
  ];
}
