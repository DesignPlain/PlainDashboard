import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigManagedGroupConfig {
  // Output only. The name of the Instance Group Manager for this group.
  InstanceGroupManagerName?: string;

  // Output only. The name of the Instance Template used for the Managed Instance Group.
  InstanceTemplateName?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigManagedGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceGroupManagerName",
      "Output only. The name of the Instance Group Manager for this group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTemplateName",
      "Output only. The name of the Instance Template used for the Managed Instance Group.",
      [],
      false,
      false,
    ),
  ];
}
