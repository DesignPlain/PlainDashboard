import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterProtectConfigWorkloadConfig {
  // Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  AuditMode?: string;
}

export function Container_getClusterProtectConfigWorkloadConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AuditMode",
      "Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.",
      [],
      true,
      false,
    ),
  ];
}
