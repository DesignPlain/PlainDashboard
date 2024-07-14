import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterProtectConfigWorkloadConfig,
  container_ClusterProtectConfigWorkloadConfig_GetTypes,
} from "./container_ClusterProtectConfigWorkloadConfig";

export interface container_ClusterProtectConfig {
  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  workloadVulnerabilityMode?: string;

  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations. Structure is documented below
  workloadConfig?: container_ClusterProtectConfigWorkloadConfig;
}

export function container_ClusterProtectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "workloadVulnerabilityMode",
      "Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workloadConfig",
      "WorkloadConfig defines which actions are enabled for a cluster's workload configurations. Structure is documented below",
      container_ClusterProtectConfigWorkloadConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
