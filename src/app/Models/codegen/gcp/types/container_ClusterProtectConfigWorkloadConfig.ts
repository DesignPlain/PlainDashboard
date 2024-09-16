import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterProtectConfigWorkloadConfig {
  // Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  auditMode?: string;
}

export function container_ClusterProtectConfigWorkloadConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'auditMode',
      "Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.",
      () => [],
      true,
      false,
    ),
  ];
}
