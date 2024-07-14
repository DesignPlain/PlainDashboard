import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vmwareengine_ClusterNodeTypeConfig,
  vmwareengine_ClusterNodeTypeConfig_GetTypes,
} from "../types/vmwareengine_ClusterNodeTypeConfig";

export interface ClusterArgs {
  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
Structure is documented below.
*/
  nodeTypeConfigs?: Array<vmwareengine_ClusterNodeTypeConfig>;

  /*
The resource name of the private cloud to create a new cluster in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  parent?: string;

  /*
The ID of the Cluster.


- - -
*/
  name?: string;
}
export class Cluster extends Resource {
  /*
The resource name of the private cloud to create a new cluster in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  public parent?: string;

  // State of the Cluster.
  public state?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  /*
True if the cluster is a management cluster; false otherwise.
There can only be one management cluster in a private cloud and it has to be the first one.
*/
  public management?: boolean;

  /*
The ID of the Cluster.


- - -
*/
  public name?: string;

  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
Structure is documented below.
*/
  public nodeTypeConfigs?: Array<vmwareengine_ClusterNodeTypeConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource name of the private cloud to create a new cluster in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the Cluster.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nodeTypeConfigs",
        "The map of cluster node types in this cluster,\nwhere the key is canonical identifier of the node type (corresponds to the NodeType).\nStructure is documented below.",
        vmwareengine_ClusterNodeTypeConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
