import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  // Whether or not the advanced datapath metrics are enabled.
  EnableMetrics?: boolean;

  // Whether or not Relay is enabled.
  EnableRelay?: boolean;

  // Mode used to make Relay available.
  RelayMode?: string;
}

export function Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RelayMode",
      "Mode used to make Relay available.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableMetrics",
      "Whether or not the advanced datapath metrics are enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableRelay",
      "Whether or not Relay is enabled.",
      [],
      true,
      false,
    ),
  ];
}
