import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_UptimeCheckConfigTcpCheckPingConfig,
  Monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes,
} from "./Monitoring_UptimeCheckConfigTcpCheckPingConfig";

export interface Monitoring_UptimeCheckConfigTcpCheck {
  /*
Contains information needed to add pings to a TCP check.
Structure is documented below.
*/
  PingConfig?: Monitoring_UptimeCheckConfigTcpCheckPingConfig;

  // The port to the page to run the check against. Will be combined with host (specified within the `monitored_resource`) to construct the full URL.
  Port?: number;
}

export function Monitoring_UptimeCheckConfigTcpCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PingConfig",
      "Contains information needed to add pings to a TCP check.\nStructure is documented below.",
      Monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The port to the page to run the check against. Will be combined with host (specified within the `monitored_resource`) to construct the full URL.",
      [],
      true,
      false,
    ),
  ];
}
