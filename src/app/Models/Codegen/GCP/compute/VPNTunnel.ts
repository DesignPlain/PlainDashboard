import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VPNTunnelArgs {
  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  PeerGcpGateway?: string;

  // IP address of the peer VPN gateway. Only IPv4 is supported.
  PeerIp?: string;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  Region?: string;

  // URL of router resource to be used for dynamic routing.
  Router?: string;

  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  SharedSecret?: string;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  VpnGateway?: string;

  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  IkeVersion?: number;

  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  LocalTrafficSelectors?: Array<string>;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  VpnGatewayInterface?: number;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  PeerExternalGateway?: string;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  TargetVpnGateway?: string;

  // An optional description of this resource.
  Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  PeerExternalGatewayInterface?: number;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  RemoteTrafficSelectors?: Array<string>;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

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
}
export class VPNTunnel extends Resource {
  /*
IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
*/
  public IkeVersion?: number;

  /*
Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public LocalTrafficSelectors?: Array<string>;

  // URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  public PeerExternalGateway?: string;

  // IP address of the peer VPN gateway. Only IPv4 is supported.
  public PeerIp?: string;

  // URL of router resource to be used for dynamic routing.
  public Router?: string;

  /*
Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  public SharedSecret?: string;

  // The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Detailed status message for the VPN tunnel.
  public DetailedStatus?: string;

  /*
Labels to apply to this VpnTunnel.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public PeerGcpGateway?: string;

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

  // Hash of the shared secret.
  public SharedSecretHash?: string;

  /*
URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a `gcp.compute.HaVpnGateway` resource.
*/
  public VpnGateway?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public LabelFingerprint?: string;

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

  // The unique identifier for the resource. This identifier is defined by the server.
  public TunnelId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  public PeerExternalGatewayInterface?: number;

  /*
Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example `192.168.0.0/16`. The ranges should be disjoint.
Only IPv4 is supported.
*/
  public RemoteTrafficSelectors?: Array<string>;

  /*
URL of the Target VPN gateway with which this VPN tunnel is
associated.
*/
  public TargetVpnGateway?: string;

  // The interface ID of the VPN gateway with which this VPN tunnel is associated.
  public VpnGatewayInterface?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "LocalTrafficSelectors",
        "Local traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "VpnGatewayInterface",
        "The interface ID of the VPN gateway with which this VPN tunnel is associated.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "PeerExternalGatewayInterface",
        "The interface ID of the external VPN gateway to which this VPN tunnel is connected.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels to apply to this VpnTunnel.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63\ncharacters long and match the regular expression\n`a-z?` which means the first character\nmust be a lowercase letter, and all following characters must\nbe a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "IkeVersion",
        "IKE protocol version to use when establishing the VPN tunnel with\npeer VPN gateway.\nAcceptable IKE versions are 1 or 2. Default version is 2.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetVpnGateway",
        "URL of the Target VPN gateway with which this VPN tunnel is\nassociated.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerGcpGateway",
        "URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.\nIf provided, the VPN tunnel will automatically use the same vpn_gateway_interface\nID in the peer GCP VPN gateway.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
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
        InputType.Array,
        "RemoteTrafficSelectors",
        "Remote traffic selector to use when establishing the VPN tunnel with\npeer VPN gateway. The value should be a CIDR formatted string,\nfor example `192.168.0.0/16`. The ranges should be disjoint.\nOnly IPv4 is supported.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerIp",
        "IP address of the peer VPN gateway. Only IPv4 is supported.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region where the tunnel is located. If unset, is set to the region of `target_vpn_gateway`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "URL of router resource to be used for dynamic routing.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SharedSecret",
        "Shared secret used to set the secure session between the Cloud VPN\ngateway and the peer VPN gateway.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "VpnGateway",
        "URL of the VPN gateway with which this VPN tunnel is associated.\nThis must be used if a High Availability VPN gateway resource is created.\nThis field must reference a `gcp.compute.HaVpnGateway` resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerExternalGateway",
        "URL of the peer side external VPN gateway to which this VPN tunnel is connected.",
        [],
        false,
        true,
      ),
    ];
  }
}
