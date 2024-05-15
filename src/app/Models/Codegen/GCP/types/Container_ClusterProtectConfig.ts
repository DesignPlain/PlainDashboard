import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterProtectConfigWorkloadConfig,
  Container_ClusterProtectConfigWorkloadConfig_GetTypes,
} from "./Container_ClusterProtectConfigWorkloadConfig";

export interface Container_ClusterProtectConfig {
  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations. Structure is documented below
  WorkloadConfig?: Container_ClusterProtectConfigWorkloadConfig;

  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  WorkloadVulnerabilityMode?: string;
}

export function Container_ClusterProtectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "WorkloadConfig",
      "WorkloadConfig defines which actions are enabled for a cluster's workload configurations. Structure is documented below",
      Container_ClusterProtectConfigWorkloadConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkloadVulnerabilityMode",
      "Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.",
      [],
      false,
      false,
    ),
  ];
}
