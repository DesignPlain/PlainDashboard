import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig,
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig";

export interface Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup {
  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  Name?: string;

  // The node group instance group configuration.
  NodeGroupConfig?: Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig;

  /*
Node group roles. 
One of `"DRIVER"`.
*/
  Roles?: Array<string>;
}

export function Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the cluster, unique within the project and\nzone.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NodeGroupConfig",
      "The node group instance group configuration.",
      Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Roles",
      'Node group roles. \nOne of `"DRIVER"`.',
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
