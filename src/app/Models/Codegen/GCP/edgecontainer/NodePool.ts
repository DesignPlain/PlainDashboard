import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_NodePoolLocalDiskEncryption,
  Edgecontainer_NodePoolLocalDiskEncryption_GetTypes,
} from "../types/Edgecontainer_NodePoolLocalDiskEncryption";
import {
  Edgecontainer_NodePoolNodeConfig,
  Edgecontainer_NodePoolNodeConfig_GetTypes,
} from "../types/Edgecontainer_NodePoolNodeConfig";

export interface NodePoolArgs {
  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  Cluster?: string;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  LocalDiskEncryption?: Edgecontainer_NodePoolLocalDiskEncryption;

  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  MachineFilter?: string;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  NodeConfig?: Edgecontainer_NodePoolNodeConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location of the resource.
  Location?: string;

  // The resource name of the node pool.
  Name?: string;

  // The number of nodes in the pool.
  NodeCount?: number;

  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  NodeLocation?: string;
}
export class NodePool extends Resource {
  // The resource name of the node pool.
  public Name?: string;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  public NodeConfig?: Edgecontainer_NodePoolNodeConfig;

  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  public NodeLocation?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The location of the resource.
  public Location?: string;

  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  public MachineFilter?: string;

  // The time when the node pool was last updated.
  public UpdateTime?: string;

  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  public Cluster?: string;

  // The time when the node pool was created.
  public CreateTime?: string;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  public LocalDiskEncryption?: Edgecontainer_NodePoolLocalDiskEncryption;

  // The number of nodes in the pool.
  public NodeCount?: number;

  // The lowest release version among all worker nodes.
  public NodeVersion?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "NodeCount",
        "The number of nodes in the pool.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The name of the target Distributed Cloud Edge Cluster.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LocalDiskEncryption",
        "Local disk encryption options. This field is only used when enabling CMEK support.\nStructure is documented below.",
        Edgecontainer_NodePoolLocalDiskEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineFilter",
        'Only machines matching this filter will be allowed to join the node pool.\nThe filtering language accepts strings like "name=<name>", and is\ndocumented in more detail in [AIP-160](https://google.aip.dev/160).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Configuration for each node in the NodePool\nStructure is documented below.",
        Edgecontainer_NodePoolNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the node pool.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels associated with this resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeLocation",
        "Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.",
        [],
        true,
        true,
      ),
    ];
  }
}
