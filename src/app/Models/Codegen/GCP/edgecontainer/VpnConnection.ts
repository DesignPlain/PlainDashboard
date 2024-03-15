import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { VpnConnectionDetail } from "../types/VpnConnectionDetail";
import { VpnConnectionVpcProject } from "../types/VpnConnectionVpcProject";

export interface VpnConnectionArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The network ID of VPC to connect to.
  Vpc?: string;

  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  Cluster?: string;

  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  EnableHighAvailability?: boolean;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The resource name of VPN connection
  Name?: string;

  /*
NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.
*/
  NatGatewayIp?: string;

  /*
Google Cloud Platform location.


- - -
*/
  Location?: string;

  // The VPN connection Cloud Router name.
  Router?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  VpcProject?: VpnConnectionVpcProject;
}
export class VpnConnection extends Resource {
  /*
Google Cloud Platform location.


- - -
*/
  public Location?: string;

  // The resource name of VPN connection
  public Name?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  public VpcProject?: VpnConnectionVpcProject;

  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  public Cluster?: string;

  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  public EnableHighAvailability?: boolean;

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

  // The time when the VPN connection was last updated.
  public UpdateTime?: string;

  // The time when the VPN connection was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The network ID of VPC to connect to.
  public Vpc?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The VPN connection Cloud Router name.
  public Router?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public Details?: Array<VpnConnectionDetail>;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The VPN connection Cloud Router name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Vpc",
        "The network ID of VPC to connect to.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableHighAvailability",
        "Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels associated with this resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Google Cloud Platform location.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of VPN connection",
      ),
      new DynamicUIProps(
        InputType.String,
        "NatGatewayIp",
        "NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.\nThis is empty if NAT is not used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcProject",
        "Project detail of the VPC network. Required if VPC is in a different project than the cluster project.\nStructure is documented below.",
      ),
    ];
  }
}
