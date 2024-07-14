import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterProtectConfigWorkloadConfig {
  // Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  auditMode?: string;
}

export function container_getClusterProtectConfigWorkloadConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "auditMode",
      "Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.",
      [],
      true,
      false,
    ),
  ];
}
