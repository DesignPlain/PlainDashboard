import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig,
  vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig_GetTypes,
} from "./vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig";

export interface vmwareengine_getPrivateCloudManagementCluster {
  /*
The user-provided identifier of the new Cluster. The identifier must meet the following requirements:
  - Only contains 1-63 alphanumeric characters and hyphens
  - Begins with an alphabetical character
  - Ends with a non-hyphen character
  - Not formatted as a UUID
  - Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
*/
  clusterId?: string;

  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
*/
  nodeTypeConfigs?: Array<vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig>;
}

export function vmwareengine_getPrivateCloudManagementCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeTypeConfigs",
      "The map of cluster node types in this cluster,\nwhere the key is canonical identifier of the node type (corresponds to the NodeType).",
      vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterId",
      "The user-provided identifier of the new Cluster. The identifier must meet the following requirements:\n  * Only contains 1-63 alphanumeric characters and hyphens\n  * Begins with an alphabetical character\n  * Ends with a non-hyphen character\n  * Not formatted as a UUID\n  * Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)",
      [],
      true,
      false,
    ),
  ];
}
