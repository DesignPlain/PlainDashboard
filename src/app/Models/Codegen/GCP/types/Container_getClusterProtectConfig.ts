import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterProtectConfigWorkloadConfig,
  Container_getClusterProtectConfigWorkloadConfig_GetTypes,
} from "./Container_getClusterProtectConfigWorkloadConfig";

export interface Container_getClusterProtectConfig {
  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations.
  WorkloadConfigs?: Array<Container_getClusterProtectConfigWorkloadConfig>;

  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  WorkloadVulnerabilityMode?: string;
}

export function Container_getClusterProtectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "WorkloadConfigs",
      "WorkloadConfig defines which actions are enabled for a cluster's workload configurations.",
      Container_getClusterProtectConfigWorkloadConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkloadVulnerabilityMode",
      "Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.",
      [],
      true,
      false,
    ),
  ];
}
