import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  // Whether or not to enable advanced datapath metrics.
  enableMetrics?: boolean;

  // Whether or not Relay is enabled.
  enableRelay?: boolean;

  // Mode used to make Relay available.
  relayMode?: string;
}

export function container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableMetrics",
      "Whether or not to enable advanced datapath metrics.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableRelay",
      "Whether or not Relay is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "relayMode",
      "Mode used to make Relay available.",
      [],
      false,
      false,
    ),
  ];
}
