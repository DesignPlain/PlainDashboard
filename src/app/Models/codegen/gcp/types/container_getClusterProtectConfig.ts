import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_getClusterProtectConfigWorkloadConfig,
  container_getClusterProtectConfigWorkloadConfig_GetTypes,
} from './container_getClusterProtectConfigWorkloadConfig';

export interface container_getClusterProtectConfig {
  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations.
  workloadConfigs?: Array<container_getClusterProtectConfigWorkloadConfig>;

  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  workloadVulnerabilityMode?: string;
}

export function container_getClusterProtectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'workloadConfigs',
      "WorkloadConfig defines which actions are enabled for a cluster's workload configurations.",
      () => container_getClusterProtectConfigWorkloadConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'workloadVulnerabilityMode',
      'Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.',
      () => [],
      true,
      false,
    ),
  ];
}
