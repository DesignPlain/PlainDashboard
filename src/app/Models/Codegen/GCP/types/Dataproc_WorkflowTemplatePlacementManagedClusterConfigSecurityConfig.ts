import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig {
  // Kerberos related configuration.
  KerberosConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KerberosConfig",
      "Kerberos related configuration.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
