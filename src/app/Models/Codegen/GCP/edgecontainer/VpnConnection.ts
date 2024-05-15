import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_VpnConnectionVpcProject,
  Edgecontainer_VpnConnectionVpcProject_GetTypes,
} from "../types/Edgecontainer_VpnConnectionVpcProject";
import {
  Edgecontainer_VpnConnectionDetail,
  Edgecontainer_VpnConnectionDetail_GetTypes,
} from "../types/Edgecontainer_VpnConnectionDetail";

export interface VpnConnectionArgs {
  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  EnableHighAvailability?: boolean;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Google Cloud Platform location.


- - -
*/
  Location?: string;

  /*
NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.
*/
  NatGatewayIp?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The VPN connection Cloud Router name.
  Router?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  VpcProject?: Edgecontainer_VpnConnectionVpcProject;

  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  Cluster?: string;

  // The resource name of VPN connection
  Name?: string;

  // The network ID of VPC to connect to.
  Vpc?: string;
}
export class VpnConnection extends Resource {
  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  public EnableHighAvailability?: boolean;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The time when the VPN connection was created.
  public CreateTime?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public Details?: Array<Edgecontainer_VpnConnectionDetail>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  public Cluster?: string;

  // The resource name of VPN connection
  public Name?: string;

  // The VPN connection Cloud Router name.
  public Router?: string;

  // The time when the VPN connection was last updated.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Google Cloud Platform location.


- - -
*/
  public Location?: string;

  /*
NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.
*/
  public NatGatewayIp?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The network ID of VPC to connect to.
  public Vpc?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  public VpcProject?: Edgecontainer_VpnConnectionVpcProject;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VpcProject",
        "Project detail of the VPC network. Required if VPC is in a different project than the cluster project.\nStructure is documented below.",
        Edgecontainer_VpnConnectionVpcProject_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of VPN connection",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Vpc",
        "The network ID of VPC to connect to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableHighAvailability",
        "Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Google Cloud Platform location.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The VPN connection Cloud Router name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.",
        [],
        true,
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
        "NatGatewayIp",
        "NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.\nThis is empty if NAT is not used.",
        [],
        false,
        true,
      ),
    ];
  }
}
