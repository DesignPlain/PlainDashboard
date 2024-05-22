import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  edgecontainer_VpnConnectionDetail,
  edgecontainer_VpnConnectionDetail_GetTypes,
} from "../types/edgecontainer_VpnConnectionDetail";
import {
  edgecontainer_VpnConnectionVpcProject,
  edgecontainer_VpnConnectionVpcProject_GetTypes,
} from "../types/edgecontainer_VpnConnectionVpcProject";

export interface VpnConnectionArgs {
  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  cluster?: string;

  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The VPN connection Cloud Router name.
  router?: string;

  // The network ID of VPC to connect to.
  vpc?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  vpcProject?: edgecontainer_VpnConnectionVpcProject;

  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  enableHighAvailability?: boolean;

  /*
Google Cloud Platform location.


- - -
*/
  location?: string;

  // The resource name of VPN connection
  name?: string;

  /*
NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.
*/
  natGatewayIp?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class VpnConnection extends Resource {
  /*
Labels associated with this resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The resource name of VPN connection
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The VPN connection Cloud Router name.
  public router?: string;

  // The time when the VPN connection was created.
  public createTime?: string;

  // Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.
  public enableHighAvailability?: boolean;

  /*
A nested object resource
Structure is documented below.
*/
  public details?: Array<edgecontainer_VpnConnectionDetail>;

  // The time when the VPN connection was last updated.
  public updateTime?: string;

  // The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.
  public cluster?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Google Cloud Platform location.


- - -
*/
  public location?: string;

  /*
NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.
*/
  public natGatewayIp?: string;

  // The network ID of VPC to connect to.
  public vpc?: string;

  /*
Project detail of the VPC network. Required if VPC is in a different project than the cluster project.
Structure is documented below.
*/
  public vpcProject?: edgecontainer_VpnConnectionVpcProject;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "Google Cloud Platform location.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of VPN connection",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "natGatewayIp",
        "NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.\nThis is empty if NAT is not used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "router",
        "The VPN connection Cloud Router name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableHighAvailability",
        "Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels associated with this resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpc",
        "The network ID of VPC to connect to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcProject",
        "Project detail of the VPC network. Required if VPC is in a different project than the cluster project.\nStructure is documented below.",
        edgecontainer_VpnConnectionVpcProject_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
