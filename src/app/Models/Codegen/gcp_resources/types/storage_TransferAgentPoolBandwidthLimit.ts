import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storage_TransferAgentPoolBandwidthLimit {
  // Bandwidth rate in megabytes per second, distributed across all the agents in the pool.
  limitMbps?: string;
}

export function storage_TransferAgentPoolBandwidthLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "limitMbps",
      "Bandwidth rate in megabytes per second, distributed across all the agents in the pool.",
      [],
      true,
      false,
    ),
  ];
}
