import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionInstanceTemplateNetworkPerformanceConfig {
  // The egress bandwidth tier to enable. Possible values: TIER_1, DEFAULT
  totalEgressBandwidthTier?: string;
}

export function compute_RegionInstanceTemplateNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalEgressBandwidthTier",
      "The egress bandwidth tier to enable. Possible values: TIER_1, DEFAULT",
      () => [],
      true,
      true,
    ),
  ];
}
