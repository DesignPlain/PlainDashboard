import { ClusterClusterConfigAuxiliaryNodeGroupNodeGroup } from "./ClusterClusterConfigAuxiliaryNodeGroupNodeGroup";

export interface ClusterClusterConfigAuxiliaryNodeGroup {
  // A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
  NodeGroupId?: string;

  // Node group configuration.
  NodeGroups?: Array<ClusterClusterConfigAuxiliaryNodeGroupNodeGroup>;
}
