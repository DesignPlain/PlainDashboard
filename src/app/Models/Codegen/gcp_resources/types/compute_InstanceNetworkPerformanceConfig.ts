import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceNetworkPerformanceConfig {
  /*
The egress bandwidth tier to enable.
Possible values: TIER_1, DEFAULT
*/
  totalEgressBandwidthTier?: string;
}

export function compute_InstanceNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalEgressBandwidthTier",
      "The egress bandwidth tier to enable.\nPossible values: TIER_1, DEFAULT",
      [],
      true,
      true,
    ),
  ];
}
