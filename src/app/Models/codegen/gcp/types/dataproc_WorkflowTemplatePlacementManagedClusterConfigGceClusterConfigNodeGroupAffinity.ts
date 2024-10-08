import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  // Required. The URI of a sole-tenant /zones/us-central1-a/nodeGroups/node-group-1` - `node-group-1`
  nodeGroup?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nodeGroup',
      'Required. The URI of a sole-tenant /zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`',
      () => [],
      true,
      true,
    ),
  ];
}
