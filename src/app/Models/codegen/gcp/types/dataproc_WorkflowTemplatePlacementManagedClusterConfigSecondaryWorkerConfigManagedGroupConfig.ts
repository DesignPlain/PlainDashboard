import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigManagedGroupConfig {
  // Output only. The name of the Instance Group Manager for this group.
  instanceGroupManagerName?: string;

  // Output only. The name of the Instance Template used for the Managed Instance Group.
  instanceTemplateName?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigManagedGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceGroupManagerName',
      'Output only. The name of the Instance Group Manager for this group.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceTemplateName',
      'Output only. The name of the Instance Template used for the Managed Instance Group.',
      () => [],
      false,
      false,
    ),
  ];
}
