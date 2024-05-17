import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigSecurityConfigKerberosConfig,
  Dataproc_ClusterClusterConfigSecurityConfigKerberosConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigSecurityConfigKerberosConfig";

export interface Dataproc_ClusterClusterConfigSecurityConfig {
  // Kerberos Configuration
  KerberosConfig?: Dataproc_ClusterClusterConfigSecurityConfigKerberosConfig;
}

export function Dataproc_ClusterClusterConfigSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KerberosConfig",
      "Kerberos Configuration",
      Dataproc_ClusterClusterConfigSecurityConfigKerberosConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
