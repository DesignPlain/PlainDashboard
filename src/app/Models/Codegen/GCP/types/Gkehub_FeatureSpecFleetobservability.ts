import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpecFleetobservabilityLoggingConfig,
  Gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes,
} from "./Gkehub_FeatureSpecFleetobservabilityLoggingConfig";

export interface Gkehub_FeatureSpecFleetobservability {
  /*
Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.
Structure is documented below.
*/
  LoggingConfig?: Gkehub_FeatureSpecFleetobservabilityLoggingConfig;
}

export function Gkehub_FeatureSpecFleetobservability_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.\nStructure is documented below.",
      Gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
