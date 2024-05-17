import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferAgentPoolBandwidthLimit {
  // Bandwidth rate in megabytes per second, distributed across all the agents in the pool.
  LimitMbps?: string;
}

export function Storage_TransferAgentPoolBandwidthLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LimitMbps",
      "Bandwidth rate in megabytes per second, distributed across all the agents in the pool.",
      [],
      true,
      false,
    ),
  ];
}
