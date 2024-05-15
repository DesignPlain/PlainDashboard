import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkconnectivity_SpokeLinkedRouterApplianceInstances,
  Networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes,
} from "../types/Networkconnectivity_SpokeLinkedRouterApplianceInstances";
import {
  Networkconnectivity_SpokeLinkedVpnTunnels,
  Networkconnectivity_SpokeLinkedVpnTunnels_GetTypes,
} from "../types/Networkconnectivity_SpokeLinkedVpnTunnels";
import {
  Networkconnectivity_SpokeLinkedInterconnectAttachments,
  Networkconnectivity_SpokeLinkedInterconnectAttachments_GetTypes,
} from "../types/Networkconnectivity_SpokeLinkedInterconnectAttachments";
import {
  Networkconnectivity_SpokeLinkedVpcNetwork,
  Networkconnectivity_SpokeLinkedVpcNetwork_GetTypes,
} from "../types/Networkconnectivity_SpokeLinkedVpcNetwork";

export interface SpokeArgs {
  // Immutable. The name of the spoke. Spoke names must be unique.
  Name?: string;

  // Immutable. The URI of the hub that this spoke is attached to.
  Hub?: string;

  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The URIs of linked Router appliance resources
  LinkedRouterApplianceInstances?: Networkconnectivity_SpokeLinkedRouterApplianceInstances;

  // The URIs of linked VPN tunnel resources
  LinkedVpnTunnels?: Networkconnectivity_SpokeLinkedVpnTunnels;

  // The location for the resource
  Location?: string;

  // The project for the resource
  Project?: string;

  // An optional description of the spoke.
  Description?: string;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  LinkedInterconnectAttachments?: Networkconnectivity_SpokeLinkedInterconnectAttachments;

  // VPC network that is associated with the spoke.
  LinkedVpcNetwork?: Networkconnectivity_SpokeLinkedVpcNetwork;
}
export class Spoke extends Resource {
  // The URIs of linked VPN tunnel resources
  public LinkedVpnTunnels?: Networkconnectivity_SpokeLinkedVpnTunnels;

  // The location for the resource
  public Location?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // Immutable. The URI of the hub that this spoke is attached to.
  public Hub?: string;

  // VPC network that is associated with the spoke.
  public LinkedVpcNetwork?: Networkconnectivity_SpokeLinkedVpcNetwork;

  // Immutable. The name of the spoke. Spoke names must be unique.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // Output only. The current lifecycle state of this spoke. Possible values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING
  public State?: string;

  // Output only. The time the spoke was created.
  public CreateTime?: string;

  // Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id.
  public UniqueId?: string;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  public LinkedInterconnectAttachments?: Networkconnectivity_SpokeLinkedInterconnectAttachments;

  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The URIs of linked Router appliance resources
  public LinkedRouterApplianceInstances?: Networkconnectivity_SpokeLinkedRouterApplianceInstances;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Output only. The time the spoke was last updated.
  public UpdateTime?: string;

  // An optional description of the spoke.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "LinkedVpcNetwork",
        "VPC network that is associated with the spoke.",
        Networkconnectivity_SpokeLinkedVpcNetwork_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Immutable. The name of the spoke. Spoke names must be unique.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Hub",
        "Immutable. The URI of the hub that this spoke is attached to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of the spoke.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LinkedInterconnectAttachments",
        "A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.",
        Networkconnectivity_SpokeLinkedInterconnectAttachments_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LinkedRouterApplianceInstances",
        "The URIs of linked Router appliance resources",
        Networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LinkedVpnTunnels",
        "The URIs of linked VPN tunnel resources",
        Networkconnectivity_SpokeLinkedVpnTunnels_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
    ];
  }
}
