import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig {
  // Required. Resource name of an existing Dataproc Metastore service. Example: - `projects/`
  dataprocMetastoreService?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataprocMetastoreService",
      "Required. Resource name of an existing Dataproc Metastore service. Example: * `projects/`",
      [],
      true,
      true,
    ),
  ];
}
