import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig {
  // Kerberos related configuration.
  kerberosConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kerberosConfig",
      "Kerberos related configuration.",
      () =>
        dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
