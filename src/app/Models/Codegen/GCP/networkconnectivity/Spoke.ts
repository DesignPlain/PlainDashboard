import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SpokeLinkedRouterApplianceInstances } from "../types/SpokeLinkedRouterApplianceInstances";
import { SpokeLinkedVpnTunnels } from "../types/SpokeLinkedVpnTunnels";
import { SpokeLinkedVpcNetwork } from "../types/SpokeLinkedVpcNetwork";
import { SpokeLinkedInterconnectAttachments } from "../types/SpokeLinkedInterconnectAttachments";

export interface SpokeArgs {
  // The project for the resource
  Project?: string;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  LinkedInterconnectAttachments?: SpokeLinkedInterconnectAttachments;

  // The URIs of linked Router appliance resources
  LinkedRouterApplianceInstances?: SpokeLinkedRouterApplianceInstances;

  // The location for the resource
  Location?: string;

  // Immutable. The name of the spoke. Spoke names must be unique.
  Name?: string;

  // The URIs of linked VPN tunnel resources
  LinkedVpnTunnels?: SpokeLinkedVpnTunnels;

  // An optional description of the spoke.
  Description?: string;

  // Immutable. The URI of the hub that this spoke is attached to.
  Hub?: string;

  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // VPC network that is associated with the spoke.
  LinkedVpcNetwork?: SpokeLinkedVpcNetwork;
}
export class Spoke extends Resource {
  // Output only. The current lifecycle state of this spoke. Possible values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING
  public State?: string;

  // The URIs of linked VPN tunnel resources
  public LinkedVpnTunnels?: SpokeLinkedVpnTunnels;

  // Immutable. The name of the spoke. Spoke names must be unique.
  public Name?: string;

  // The URIs of linked Router appliance resources
  public LinkedRouterApplianceInstances?: SpokeLinkedRouterApplianceInstances;

  // The project for the resource
  public Project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id.
  public UniqueId?: string;

  // Output only. The time the spoke was last updated.
  public UpdateTime?: string;

  // Immutable. The URI of the hub that this spoke is attached to.
  public Hub?: string;

  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  public LinkedInterconnectAttachments?: SpokeLinkedInterconnectAttachments;

  // VPC network that is associated with the spoke.
  public LinkedVpcNetwork?: SpokeLinkedVpcNetwork;

  // The location for the resource
  public Location?: string;

  // Output only. The time the spoke was created.
  public CreateTime?: string;

  // An optional description of the spoke.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Immutable. The name of the spoke. Spoke names must be unique.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkedVpnTunnels",
        "The URIs of linked VPN tunnel resources",
      ),
      new DynamicUIProps(
        InputType.String,
        "Hub",
        "Immutable. The URI of the hub that this spoke is attached to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkedVpcNetwork",
        "VPC network that is associated with the spoke.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkedInterconnectAttachments",
        "A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkedRouterApplianceInstances",
        "The URIs of linked Router appliance resources",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of the spoke.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
    ];
  }
}
