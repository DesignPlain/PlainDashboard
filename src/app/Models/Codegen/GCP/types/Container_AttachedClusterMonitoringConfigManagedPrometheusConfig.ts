import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AttachedClusterMonitoringConfigManagedPrometheusConfig {
  // Enable Managed Collection.
  Enabled?: boolean;
}

export function Container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Managed Collection.",
      [],
      false,
      false,
    ),
  ];
}
