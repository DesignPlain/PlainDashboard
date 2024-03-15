import { UptimeCheckConfigTcpCheckPingConfig } from "./UptimeCheckConfigTcpCheckPingConfig";

export interface UptimeCheckConfigTcpCheck {
  /*
Contains information needed to add pings to a TCP check.
Structure is documented below.
*/
  PingConfig?: UptimeCheckConfigTcpCheckPingConfig;

  // The port to the page to run the check against. Will be combined with host (specified within the `monitored_resource`) to construct the full URL.
  Port?: number;
}
