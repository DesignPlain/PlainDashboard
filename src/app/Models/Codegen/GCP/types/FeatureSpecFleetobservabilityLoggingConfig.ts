import { FeatureSpecFleetobservabilityLoggingConfigDefaultConfig } from "./FeatureSpecFleetobservabilityLoggingConfigDefaultConfig";
import { FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig } from "./FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig";

export interface FeatureSpecFleetobservabilityLoggingConfig {
  /*
Specified if applying the default routing config to logs not specified in other configs.
Structure is documented below.
*/
  DefaultConfig?: FeatureSpecFleetobservabilityLoggingConfigDefaultConfig;

  /*
Specified if applying the routing config to all logs for all fleet scopes.
Structure is documented below.
*/
  FleetScopeLogsConfig?: FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}
