import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkconnectivity_SpokeLinkedInterconnectAttachments,
  networkconnectivity_SpokeLinkedInterconnectAttachments_GetTypes,
} from "../types/networkconnectivity_SpokeLinkedInterconnectAttachments";
import {
  networkconnectivity_SpokeLinkedRouterApplianceInstances,
  networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes,
} from "../types/networkconnectivity_SpokeLinkedRouterApplianceInstances";
import {
  networkconnectivity_SpokeLinkedVpnTunnels,
  networkconnectivity_SpokeLinkedVpnTunnels_GetTypes,
} from "../types/networkconnectivity_SpokeLinkedVpnTunnels";
import {
  networkconnectivity_SpokeLinkedVpcNetwork,
  networkconnectivity_SpokeLinkedVpcNetwork_GetTypes,
} from "../types/networkconnectivity_SpokeLinkedVpcNetwork";

export interface SpokeArgs {
  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  linkedInterconnectAttachments?: networkconnectivity_SpokeLinkedInterconnectAttachments;

  // The URIs of linked Router appliance resources
  linkedRouterApplianceInstances?: networkconnectivity_SpokeLinkedRouterApplianceInstances;

  // The URIs of linked VPN tunnel resources
  linkedVpnTunnels?: networkconnectivity_SpokeLinkedVpnTunnels;

  // The location for the resource
  location?: string;

  // An optional description of the spoke.
  description?: string;

  // Immutable. The URI of the hub that this spoke is attached to.
  hub?: string;

  // The project for the resource
  project?: string;

  // VPC network that is associated with the spoke.
  linkedVpcNetwork?: networkconnectivity_SpokeLinkedVpcNetwork;

  // Immutable. The name of the spoke. Spoke names must be unique.
  name?: string;
}
export class Spoke extends DS_Resource {
  // VPC network that is associated with the spoke.
  public linkedVpcNetwork?: networkconnectivity_SpokeLinkedVpcNetwork;

  // The project for the resource
  public project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Immutable. The URI of the hub that this spoke is attached to.
  public hub?: string;

  // Output only. The time the spoke was last updated.
  public updateTime?: string;

  // Output only. The time the spoke was created.
  public createTime?: string;

  // The URIs of linked VPN tunnel resources
  public linkedVpnTunnels?: networkconnectivity_SpokeLinkedVpnTunnels;

  // Output only. The current lifecycle state of this spoke. Possible values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING
  public state?: string;

  // A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
  public linkedInterconnectAttachments?: networkconnectivity_SpokeLinkedInterconnectAttachments;

  // The URIs of linked Router appliance resources
  public linkedRouterApplianceInstances?: networkconnectivity_SpokeLinkedRouterApplianceInstances;

  // The location for the resource
  public location?: string;

  // Immutable. The name of the spoke. Spoke names must be unique.
  public name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id.
  public uniqueId?: string;

  // An optional description of the spoke.
  public description?: string;

  /*
Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "linkedInterconnectAttachments",
        "A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.",
        () => networkconnectivity_SpokeLinkedInterconnectAttachments_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "linkedRouterApplianceInstances",
        "The URIs of linked Router appliance resources",
        () =>
          networkconnectivity_SpokeLinkedRouterApplianceInstances_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hub",
        "Immutable. The URI of the hub that this spoke is attached to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Immutable. The name of the spoke. Spoke names must be unique.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "linkedVpnTunnels",
        "The URIs of linked VPN tunnel resources",
        () => networkconnectivity_SpokeLinkedVpnTunnels_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of the spoke.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "linkedVpcNetwork",
        "VPC network that is associated with the spoke.",
        () => networkconnectivity_SpokeLinkedVpcNetwork_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
