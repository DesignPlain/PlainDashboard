import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NodePoolLocalDiskEncryption } from "../types/NodePoolLocalDiskEncryption";
import { NodePoolNodeConfig } from "../types/NodePoolNodeConfig";

export interface NodePoolArgs {
  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  MachineFilter?: string;

  // The resource name of the node pool.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  Cluster?: string;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  LocalDiskEncryption?: NodePoolLocalDiskEncryption;

  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  NodeLocation?: string;

  // The location of the resource.
  Location?: string;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  NodeConfig?: NodePoolNodeConfig;

  // The number of nodes in the pool.
  NodeCount?: number;
}
export class NodePool extends Resource {
  // Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.
  public NodeLocation?: string;

  // The lowest release version among all worker nodes.
  public NodeVersion?: string;

  // The resource name of the node pool.
  public Name?: string;

  /*
Configuration for each node in the NodePool
Structure is documented below.
*/
  public NodeConfig?: NodePoolNodeConfig;

  // The location of the resource.
  public Location?: string;

  /*
Only machines matching this filter will be allowed to join the node pool.
The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).
*/
  public MachineFilter?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Local disk encryption options. This field is only used when enabling CMEK support.
Structure is documented below.
*/
  public LocalDiskEncryption?: NodePoolLocalDiskEncryption;

  // The number of nodes in the pool.
  public NodeCount?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The name of the target Distributed Cloud Edge Cluster.


- - -
*/
  public Cluster?: string;

  // The time when the node pool was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The time when the node pool was last updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MachineFilter",
        'Only machines matching this filter will be allowed to join the node pool.\nThe filtering language accepts strings like "name=<name>", and is\ndocumented in more detail in [AIP-160](https://google.aip.dev/160).',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the node pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The name of the target Distributed Cloud Edge Cluster.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Configuration for each node in the NodePool\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "NodeCount",
        "The number of nodes in the pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels associated with this resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LocalDiskEncryption",
        "Local disk encryption options. This field is only used when enabling CMEK support.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeLocation",
        "Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: `us-central1-edge-customer-a`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.",
      ),
    ];
  }
}
