import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  edgecontainer_NodePoolLocalDiskEncryption,
  edgecontainer_NodePoolLocalDiskEncryption_GetTypes,
} from "../types/edgecontainer_NodePoolLocalDiskEncryption";
import {
  edgecontainer_NodePoolNodeConfig,
  edgecontainer_NodePoolNodeConfig_GetTypes,
} from "../types/edgecontainer_NodePoolNodeConfig";

export interface NodePoolArgs {
  // The location of the resource.
  location?: string;

  // The resource name of the node pool.
  name?: string;

  // The number of nodes in the pool.
  nodeCount?: number;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  localDiskEncryption?: edgecontainer_NodePoolLocalDiskEncryption;

  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  machineFilter?: string;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  nodeConfig?: edgecontainer_NodePoolNodeConfig;

  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  nodeLocation?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  cluster?: string;
}
export class NodePool extends DS_Resource {
  // The time when the node pool was last updated.
  public updateTime?: string;

  // The time when the node pool was created.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The number of nodes in the pool.
  public nodeCount?: number;

  // The lowest release version among all worker nodes.
  public nodeVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The location of the resource.
  public location?: string;

  // The resource name of the node pool.
  public name?: string;

  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  public nodeLocation?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  public cluster?: string;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  public localDiskEncryption?: edgecontainer_NodePoolLocalDiskEncryption;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  public nodeConfig?: edgecontainer_NodePoolNodeConfig;

  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  public machineFilter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "localDiskEncryption",
        "Local disk encryption options. This field is only used when enabling CMEK support.\nStructure is documented below.",
        () => edgecontainer_NodePoolLocalDiskEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Configuration for each node in the NodePool\nStructure is documented below.",
        () => edgecontainer_NodePoolNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The name of the target Distributed Cloud Edge Cluster.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the node pool.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels associated with this resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineFilter",
        'Only machines matching this filter will be allowed to join the node pool.\nThe filtering language accepts strings like "name=<name>", and is\ndocumented in more detail in [AIP-160](https://google.aip.dev/160).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeLocation",
        "Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "nodeCount",
        "The number of nodes in the pool.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
