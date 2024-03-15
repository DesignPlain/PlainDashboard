import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ClusterNodeTypeConfig } from "../types/ClusterNodeTypeConfig";

export interface ClusterArgs {
  /*
The ID of the Cluster.


- - -
*/
  Name?: string;

  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
Structure is documented below.
*/
  NodeTypeConfigs?: Array<ClusterNodeTypeConfig>;

  /*
The resource name of the private cloud to create a new cluster in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  Parent?: string;
}
export class Cluster extends Resource {
  /*
The resource name of the private cloud to create a new cluster in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  public Parent?: string;

  // State of the Cluster.
  public State?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
True if the cluster is a management cluster; false otherwise.
There can only be one management cluster in a private cloud and it has to be the first one.
*/
  public Management?: boolean;

  /*
The ID of the Cluster.


- - -
*/
  public Name?: string;

  /*
The map of cluster node types in this cluster,
where the key is canonical identifier of the node type (corresponds to the NodeType).
Structure is documented below.
*/
  public NodeTypeConfigs?: Array<ClusterNodeTypeConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "NodeTypeConfigs",
        "The map of cluster node types in this cluster,\nwhere the key is canonical identifier of the node type (corresponds to the NodeType).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the private cloud to create a new cluster in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the Cluster.\n\n\n- - -",
      ),
    ];
  }
}