import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface monitoring_UptimeCheckConfigTcpCheckPingConfig {
  // Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.
  pingsCount?: number;
}

export function monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "pingsCount",
      "Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.",
      () => [],
      true,
      false,
    ),
  ];
}
