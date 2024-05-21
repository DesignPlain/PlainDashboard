import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig {
  // Output only. The name of the Instance Template used for the Managed Instance Group.
  instanceTemplateName?: string;

  // Output only. The name of the Instance Group Manager for this group.
  instanceGroupManagerName?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceTemplateName",
      "Output only. The name of the Instance Template used for the Managed Instance Group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceGroupManagerName",
      "Output only. The name of the Instance Group Manager for this group.",
      [],
      false,
      false,
    ),
  ];
}
