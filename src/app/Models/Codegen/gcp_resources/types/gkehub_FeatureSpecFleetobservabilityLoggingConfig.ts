import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig,
  gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig_GetTypes,
} from "./gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig";
import {
  gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig,
  gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig_GetTypes,
} from "./gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig";

export interface gkehub_FeatureSpecFleetobservabilityLoggingConfig {
  /*
Specified if applying the default routing config to logs not specified in other configs.
Structure is documented below.
*/
  defaultConfig?: gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig;

  /*
Specified if applying the routing config to all logs for all fleet scopes.
Structure is documented below.
*/
  fleetScopeLogsConfig?: gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}

export function gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultConfig",
      "Specified if applying the default routing config to logs not specified in other configs.\nStructure is documented below.",
      gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fleetScopeLogsConfig",
      "Specified if applying the routing config to all logs for all fleet scopes.\nStructure is documented below.",
      gkehub_FeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
