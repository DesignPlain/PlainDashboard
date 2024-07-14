import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterMonitoringConfigManagedPrometheusConfig {
  // Enable Managed Collection.
  enabled?: boolean;
}

export function container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Managed Collection.",
      [],
      false,
      false,
    ),
  ];
}
