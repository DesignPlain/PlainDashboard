import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_ClusterClusterConfigSecurityConfigKerberosConfig,
  dataproc_ClusterClusterConfigSecurityConfigKerberosConfig_GetTypes,
} from "./dataproc_ClusterClusterConfigSecurityConfigKerberosConfig";

export interface dataproc_ClusterClusterConfigSecurityConfig {
  // Kerberos Configuration
  kerberosConfig?: dataproc_ClusterClusterConfigSecurityConfigKerberosConfig;
}

export function dataproc_ClusterClusterConfigSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kerberosConfig",
      "Kerberos Configuration",
      () =>
        dataproc_ClusterClusterConfigSecurityConfigKerberosConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
