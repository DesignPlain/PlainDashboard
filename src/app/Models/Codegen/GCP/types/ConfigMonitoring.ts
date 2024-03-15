import { ConfigMonitoringRequestLogging } from "./ConfigMonitoringRequestLogging";

export interface ConfigMonitoring {
  /*
Configuration for logging requests made to this project to Stackdriver Logging
Structure is documented below.
*/
  RequestLogging?: ConfigMonitoringRequestLogging;
}
