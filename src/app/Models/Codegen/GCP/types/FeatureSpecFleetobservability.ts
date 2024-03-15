import { FeatureSpecFleetobservabilityLoggingConfig } from "./FeatureSpecFleetobservabilityLoggingConfig";

export interface FeatureSpecFleetobservability {
  /*
Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.
Structure is documented below.
*/
  LoggingConfig?: FeatureSpecFleetobservabilityLoggingConfig;
}
