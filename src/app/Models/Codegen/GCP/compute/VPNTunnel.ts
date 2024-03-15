import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VPNTunnelArgs {
  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  LocalTrafficSelectors?: Array<string>;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  RemoteTrafficSelectors?: Array<string>;

  // URL of router resource to be used for dynamic routing.
  Router?: string;

  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  IkeVersion?: number;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // IP address of the peer VPN gateway. Only IPv4 is supported.
  PeerIp?: string;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  VpnGateway?: string;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  VpnGatewayInterface?: number;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
`a-z?` which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  PeerExternalGateway?: string;

  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  PeerGcpGateway?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  Region?: string;

  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  SharedSecret?: string;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  TargetVpnGateway?: string;

  // An optional description of this resource.
  Description?: string;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  PeerExternalGatewayInterface?: number;
}
export class VPNTunnel extends Resource {
  // IP address of the peer VPN gateway. Only IPv4 is supported.
  public PeerIp?: string;

  // URL of router resource to be used for dynamic routing.
  public Router?: string;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public VpnGateway?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Detailed status message for the VPN tunnel.
  public DetailedStatus?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
`a-z?` which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  public PeerExternalGateway?: string;

  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public PeerGcpGateway?: string;

  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  public SharedSecret?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public TunnelId?: string;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  public VpnGatewayInterface?: number;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public LabelFingerprint?: string;

  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public LocalTrafficSelectors?: Array<string>;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  public PeerExternalGatewayInterface?: number;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public RemoteTrafficSelectors?: Array<string>;

  // Hash of the shared secret.
  public SharedSecretHash?: string;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  public TargetVpnGateway?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  public IkeVersion?: number;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "RemoteTrafficSelectors",
        "Remote traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VpnGateway",
        "URL of the VPN gateway with which this VPN tunnel is associated.\nThis must be used if a High Availability VPN gateway resource is created.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerExternalGateway",
        "URL of the peer side external VPN gateway to which this VPN tunnel is connected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerGcpGateway",
        "URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.\nIf provided, the VPN tunnel will automatically use the same vpn_gateway_interface\nID in the peer GCP VPN gateway.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "LocalTrafficSelectors",
        "Local traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "URL of router resource to be used for dynamic routing.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "IkeVersion",
        "IKE protocol version to use when establishing the VPN tunnel with\npeer VPN gateway.\nAcceptable IKE versions are 1 or 2. Default version is 2.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels to apply to this VpnTunnel.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerIp",
        "IP address of the peer VPN gateway. Only IPv4 is supported.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "VpnGatewayInterface",
        "The interface ID of the VPN gateway with which this VPN tunnel is associated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetVpnGateway",
        "URL of the Target VPN gateway with which this VPN tunnel is\nassociated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63\ncharacters long and match the regular expression\n`a-z?` which means the first character\nmust be a lowercase letter, and all following characters must\nbe a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SharedSecret",
        "Shared secret used to set the secure session between the Cloud VPN\ngateway and the peer VPN gateway.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.Number,
        "PeerExternalGatewayInterface",
        "The interface ID of the external VPN gateway to which this VPN tunnel is connected.",
      ),
    ];
  }
}
