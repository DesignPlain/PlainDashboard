import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkehub_FeatureSpecFleetobservabilityLoggingConfig,
  gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes,
} from "./gkehub_FeatureSpecFleetobservabilityLoggingConfig";

export interface gkehub_FeatureSpecFleetobservability {
  /*
Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.
Structure is documented below.
*/
  loggingConfig?: gkehub_FeatureSpecFleetobservabilityLoggingConfig;
}

export function gkehub_FeatureSpecFleetobservability_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.\nStructure is documented below.",
      () => gkehub_FeatureSpecFleetobservabilityLoggingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
