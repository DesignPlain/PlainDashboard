import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceNetworkPerformanceConfig {
  // The egress bandwidth tier for the instance.
  TotalEgressBandwidthTier?: string;
}

export function Compute_getInstanceNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TotalEgressBandwidthTier",
      "The egress bandwidth tier for the instance.",
      [],
      true,
      false,
    ),
  ];
}
