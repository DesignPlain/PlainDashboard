import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  // Required. The URI of a sole-tenant /zones/us-central1-a/nodeGroups/node-group-1` - `node-group-1`
  NodeGroup?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodeGroup",
      "Required. The URI of a sole-tenant /zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`",
      [],
      true,
      true,
    ),
  ];
}
