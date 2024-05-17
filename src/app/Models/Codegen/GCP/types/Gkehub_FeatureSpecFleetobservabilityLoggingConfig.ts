import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig,
  Gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig_GetTypes,
} from "./Gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig";
import {
  Gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig,
  Gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig_GetTypes,
} from "./Gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig";

export interface Gkehub_FeatureSpecFleetobservabilityLoggingConfig {
  /*
Specified if applying the default routing config to logs not specified in other configs.
Structure is documented below.
*/
  DefaultConfig?: Gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig;

  /*
Specified if applying the routing config to all logs for all fleet scopes.
Structure is documented below.
*/
  FleetScopeLogsConfig?: Gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}

export function Gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DefaultConfig",
      "Specified if applying the default routing config to logs not specified in other configs.\nStructure is documented below.",
      Gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FleetScopeLogsConfig",
      "Specified if applying the routing config to all logs for all fleet scopes.\nStructure is documented below.",
      Gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
