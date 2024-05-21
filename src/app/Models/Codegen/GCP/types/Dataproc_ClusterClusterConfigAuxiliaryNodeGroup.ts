import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup,
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes,
} from "./dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup";

export interface dataproc_ClusterClusterConfigAuxiliaryNodeGroup {
  // A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
  nodeGroupId?: string;

  // Node group configuration.
  nodeGroups?: Array<dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup>;
}

export function dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nodeGroupId",
      "A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeGroups",
      "Node group configuration.",
      dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
