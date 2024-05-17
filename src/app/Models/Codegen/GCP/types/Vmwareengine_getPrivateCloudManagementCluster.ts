import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig,
  Vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig_GetTypes,
} from "./Vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig";

export interface Vmwareengine_getPrivateCloudManagementCluster {
  /*
The user-provided identifier of the new Cluster. The identifier must meet the following requirements:
  - Only contains 1-63 alphanumeric characters and hyphens
  - Begins with an alphabetical character
  - Ends with a non-hyphen character
  - Not formatted as a UUID
  - Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
*/
  ClusterId?: string;

  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
*/
  NodeTypeConfigs?: Array<Vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig>;
}

export function Vmwareengine_getPrivateCloudManagementCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterId",
      "The user-provided identifier of the new Cluster. The identifier must meet the following requirements:\n  * Only contains 1-63 alphanumeric characters and hyphens\n  * Begins with an alphabetical character\n  * Ends with a non-hyphen character\n  * Not formatted as a UUID\n  * Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeTypeConfigs",
      "The map of cluster node types in this cluster,\nwhere the key is canonical identifier of the node type (corresponds to the NodeType).",
      Vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
