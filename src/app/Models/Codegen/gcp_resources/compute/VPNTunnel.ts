import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VPNTunnelArgs {
  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  sharedSecret?: string;

  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  peerGcpGateway?: string;

  // IP address of the peer VPN gateway. Only IPv4 is supported.
  peerIp?: string;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  region?: string;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  remoteTrafficSelectors?: Array<string>;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  vpnGateway?: string;

  // An optional description of this resource.
  description?: string;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
`a-z?` which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  peerExternalGateway?: string;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  peerExternalGatewayInterface?: number;

  // URL of router resource to be used for dynamic routing.
  router?: string;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  targetVpnGateway?: string;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  vpnGatewayInterface?: number;

  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  ikeVersion?: number;

  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  localTrafficSelectors?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class VPNTunnel extends Resource {
  // URL of router resource to be used for dynamic routing.
  public router?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Detailed status message for the VPN tunnel.
  public detailedStatus?: string;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  public peerExternalGateway?: string;

  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public peerGcpGateway?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  public sharedSecret?: string;

  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public localTrafficSelectors?: Array<string>;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public remoteTrafficSelectors?: Array<string>;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  public targetVpnGateway?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  public peerExternalGatewayInterface?: number;

  // IP address of the peer VPN gateway. Only IPv4 is supported.
  public peerIp?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  public region?: string;

  // Hash of the shared secret.
  public sharedSecretHash?: string;

  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  public ikeVersion?: number;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
`a-z?` which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public tunnelId?: string;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public vpnGateway?: string;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  public vpnGatewayInterface?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "peerGcpGateway",
        "URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.\nIf provided, the VPN tunnel will automatically use the same vpn_gateway_interface\nID in the peer GCP VPN gateway.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpnGateway",
        "URL of the VPN gateway with which this VPN tunnel is associated.\nThis must be used if a High Availability VPN gateway resource is created.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63\ncharacters long and match the regular expression\n`a-z?` which means the first character\nmust be a lowercase letter, and all following characters must\nbe a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "router",
        "URL of router resource to be used for dynamic routing.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ikeVersion",
        "IKE protocol version to use when establishing the VPN tunnel with\npeer VPN gateway.\nAcceptable IKE versions are 1 or 2. Default version is 2.",
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
        InputType.String,
        "peerIp",
        "IP address of the peer VPN gateway. Only IPv4 is supported.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this VpnTunnel.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetVpnGateway",
        "URL of the Target VPN gateway with which this VPN tunnel is\nassociated.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "localTrafficSelectors",
        "Local traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "remoteTrafficSelectors",
        "Remote traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerExternalGateway",
        "URL of the peer side external VPN gateway to which this VPN tunnel is connected.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "peerExternalGatewayInterface",
        "The interface ID of the external VPN gateway to which this VPN tunnel is connected.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "vpnGatewayInterface",
        "The interface ID of the VPN gateway with which this VPN tunnel is associated.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sharedSecret",
        "Shared secret used to set the secure session between the Cloud VPN\ngateway and the peer VPN gateway.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
