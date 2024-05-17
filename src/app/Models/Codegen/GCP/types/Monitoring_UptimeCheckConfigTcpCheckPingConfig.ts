import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigTcpCheckPingConfig {
  // Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.
  PingsCount?: number;
}

export function Monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "PingsCount",
      "Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.",
      [],
      true,
      false,
    ),
  ];
}
