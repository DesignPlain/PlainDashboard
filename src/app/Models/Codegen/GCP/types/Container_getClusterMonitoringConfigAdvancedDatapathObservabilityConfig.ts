import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  // Whether or not Relay is enabled.
  enableRelay?: boolean;

  // Mode used to make Relay available.
  relayMode?: string;

  // Whether or not the advanced datapath metrics are enabled.
  enableMetrics?: boolean;
}

export function container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableMetrics",
      "Whether or not the advanced datapath metrics are enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableRelay",
      "Whether or not Relay is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "relayMode",
      "Mode used to make Relay available.",
      [],
      true,
      false,
    ),
  ];
}
