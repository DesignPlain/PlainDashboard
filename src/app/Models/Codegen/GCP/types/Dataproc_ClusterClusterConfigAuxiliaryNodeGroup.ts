import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup,
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes,
} from "./Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup";

export interface Dataproc_ClusterClusterConfigAuxiliaryNodeGroup {
  // A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
  NodeGroupId?: string;

  // Node group configuration.
  NodeGroups?: Array<Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup>;
}

export function Dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodeGroupId",
      "A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeGroups",
      "Node group configuration.",
      Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
