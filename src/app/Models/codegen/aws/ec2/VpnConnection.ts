import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_VpnConnectionTunnel1LogOptions,
  ec2_VpnConnectionTunnel1LogOptions_GetTypes,
} from '../types/ec2_VpnConnectionTunnel1LogOptions';
import {
  ec2_VpnConnectionVgwTelemetry,
  ec2_VpnConnectionVgwTelemetry_GetTypes,
} from '../types/ec2_VpnConnectionVgwTelemetry';
import {
  ec2_VpnConnectionRoute,
  ec2_VpnConnectionRoute_GetTypes,
} from '../types/ec2_VpnConnectionRoute';
import {
  ec2_VpnConnectionTunnel2LogOptions,
  ec2_VpnConnectionTunnel2LogOptions_GetTypes,
} from '../types/ec2_VpnConnectionTunnel2LogOptions';

export interface VpnConnectionArgs {
  // The IPv4 CIDR on the AWS side of the VPN connection.
  remoteIpv4NetworkCidr?: string;

  // The ID of the EC2 Transit Gateway.
  transitGatewayId?: string;

  // The preshared key of the first VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).
  tunnel1PresharedKey?: string;

  // Options for logging VPN tunnel activity. See Log Options below for more details.
  tunnel2LogOptions?: ec2_VpnConnectionTunnel2LogOptions;

  // The action to take when the establishing the tunnel for the second VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.
  tunnel2StartupAction?: string;

  // The ID of the Virtual Private Gateway.
  vpnGatewayId?: string;

  // The range of inside IPv6 addresses for the first VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.
  tunnel1InsideIpv6Cidr?: string;

  // The lifetime for phase 1 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `28800`.
  tunnel1Phase1LifetimeSeconds?: number;

  // List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  tunnel1Phase2DhGroupNumbers?: Array<number>;

  // List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  tunnel1Phase2EncryptionAlgorithms?: Array<string>;

  // List of one or more integrity algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  tunnel1Phase2IntegrityAlgorithms?: Array<string>;

  // List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  tunnel2Phase2EncryptionAlgorithms?: Array<string>;

  // The type of VPN connection. The only type AWS supports at this time is "ipsec.1".
  type?: string;

  // One or more integrity algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  tunnel2Phase1IntegrityAlgorithms?: Array<string>;

  // Tags to apply to the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Indicate whether the VPN tunnels process IPv4 or IPv6 traffic. Valid values are `ipv4 | ipv6`. `ipv6` Supports only EC2 Transit Gateway.
  tunnelInsideIpVersion?: string;

  // The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
  localIpv6NetworkCidr?: string;

  // Indicate whether to enable acceleration for the VPN connection. Supports only EC2 Transit Gateway.
  enableAcceleration?: boolean;

  // The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the first VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel1_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel1_phase2_lifetime_seconds`.
  tunnel1RekeyMarginTimeSeconds?: number;

  // The action to take after DPD timeout occurs for the second VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.
  tunnel2DpdTimeoutAction?: string;

  // List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  tunnel2Phase1EncryptionAlgorithms?: Array<string>;

  // The lifetime for phase 1 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `28800`.
  tunnel2Phase1LifetimeSeconds?: number;

  // The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the second VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel2_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel2_phase2_lifetime_seconds`.
  tunnel2RekeyMarginTimeSeconds?: number;

  // The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
  localIpv4NetworkCidr?: string;

  // The CIDR block of the inside IP addresses for the first VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.
  tunnel1InsideCidr?: string;

  // One or more integrity algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  tunnel1Phase1IntegrityAlgorithms?: Array<string>;

  // The lifetime for phase 2 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `3600`.
  tunnel1Phase2LifetimeSeconds?: number;

  // The IPv6 CIDR on the AWS side of the VPN connection.
  remoteIpv6NetworkCidr?: string;

  // Options for logging VPN tunnel activity. See Log Options below for more details.
  tunnel1LogOptions?: ec2_VpnConnectionTunnel1LogOptions;

  // The range of inside IPv6 addresses for the second VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.
  tunnel2InsideIpv6Cidr?: string;

  // List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  tunnel2Phase2DhGroupNumbers?: Array<number>;

  // The ID of the customer gateway.
  customerGatewayId?: string;

  // The action to take after DPD timeout occurs for the first VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.
  tunnel1DpdTimeoutAction?: string;

  // The IKE versions that are permitted for the first VPN tunnel. Valid values are `ikev1 | ikev2`.
  tunnel1IkeVersions?: Array<string>;

  // The CIDR block of the inside IP addresses for the second VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.
  tunnel2InsideCidr?: string;

  // The number of packets in an IKE replay window for the first VPN tunnel. Valid value is between `64` and `2048`.
  tunnel1ReplayWindowSize?: number;

  // List of one or more integrity algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  tunnel2Phase2IntegrityAlgorithms?: Array<string>;

  // The lifetime for phase 2 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `3600`.
  tunnel2Phase2LifetimeSeconds?: number;

  // The percentage of the rekey window for the second VPN tunnel (determined by `tunnel2_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.
  tunnel2RekeyFuzzPercentage?: number;

  // Turn on or off tunnel endpoint lifecycle control feature for the second VPN tunnel. Valid values are `true | false`.
  tunnel2EnableTunnelLifecycleControl?: boolean;

  // The number of packets in an IKE replay window for the second VPN tunnel. Valid value is between `64` and `2048`.
  tunnel2ReplayWindowSize?: number;

  // . The attachment ID of the Transit Gateway attachment to Direct Connect Gateway. The ID is obtained through a data source only.
  transportTransitGatewayAttachmentId?: string;

  // The number of seconds after which a DPD timeout occurs for the first VPN tunnel. Valid value is equal or higher than `30`.
  tunnel1DpdTimeoutSeconds?: number;

  // The percentage of the rekey window for the first VPN tunnel (determined by `tunnel1_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.
  tunnel1RekeyFuzzPercentage?: number;

  // Whether the VPN connection uses static routes exclusively. Static routes must be used for devices that don't support BGP.
  staticRoutesOnly?: boolean;

  // Turn on or off tunnel endpoint lifecycle control feature for the first VPN tunnel. Valid values are `true | false`.
  tunnel1EnableTunnelLifecycleControl?: boolean;

  // The number of seconds after which a DPD timeout occurs for the second VPN tunnel. Valid value is equal or higher than `30`.
  tunnel2DpdTimeoutSeconds?: number;

  // List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  tunnel1Phase1EncryptionAlgorithms?: Array<string>;

  // List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  tunnel2Phase1DhGroupNumbers?: Array<number>;

  // The preshared key of the second VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).
  tunnel2PresharedKey?: string;

  // Indicates if a Public S2S VPN or Private S2S VPN over AWS Direct Connect. Valid values are `PublicIpv4 | PrivateIpv4`
  outsideIpAddressType?: string;

  // List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  tunnel1Phase1DhGroupNumbers?: Array<number>;

  // The action to take when the establishing the tunnel for the first VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.
  tunnel1StartupAction?: string;

  // The IKE versions that are permitted for the second VPN tunnel. Valid values are `ikev1 | ikev2`.
  tunnel2IkeVersions?: Array<string>;
}
export class VpnConnection extends DS_Resource {
  // The IPv6 CIDR on the AWS side of the VPN connection.
  public remoteIpv6NetworkCidr?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the EC2 Transit Gateway.
  public transitGatewayId?: string;

  // The action to take after DPD timeout occurs for the first VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.
  public tunnel1DpdTimeoutAction?: string;

  // The number of packets in an IKE replay window for the first VPN tunnel. Valid value is between `64` and `2048`.
  public tunnel1ReplayWindowSize?: number;

  // The RFC 6890 link-local address of the first VPN tunnel (VPN Gateway Side).
  public tunnel1VgwInsideAddress?: string;

  // List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  public tunnel1Phase1DhGroupNumbers?: Array<number>;

  // The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the first VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel1_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel1_phase2_lifetime_seconds`.
  public tunnel1RekeyMarginTimeSeconds?: number;

  // The bgp asn number of the second VPN tunnel.
  public tunnel2BgpAsn?: string;

  // The action to take after DPD timeout occurs for the second VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.
  public tunnel2DpdTimeoutAction?: string;

  // The preshared key of the second VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).
  public tunnel2PresharedKey?: string;

  // The bgp asn number of the first VPN tunnel.
  public tunnel1BgpAsn?: string;

  // The lifetime for phase 1 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `28800`.
  public tunnel2Phase1LifetimeSeconds?: number;

  // Indicate whether the VPN tunnels process IPv4 or IPv6 traffic. Valid values are `ipv4 | ipv6`. `ipv6` Supports only EC2 Transit Gateway.
  public tunnelInsideIpVersion?: string;

  // List of one or more integrity algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  public tunnel1Phase2IntegrityAlgorithms?: Array<string>;

  // The lifetime for phase 2 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `3600`.
  public tunnel2Phase2LifetimeSeconds?: number;

  // Amazon Resource Name (ARN) of the VPN Connection.
  public arn?: string;

  // The ARN of the core network attachment.
  public coreNetworkAttachmentArn?: string;

  // The ID of the customer gateway.
  public customerGatewayId?: string;

  // Indicate whether to enable acceleration for the VPN connection. Supports only EC2 Transit Gateway.
  public enableAcceleration?: boolean;

  // One or more integrity algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  public tunnel1Phase1IntegrityAlgorithms?: Array<string>;

  // The lifetime for phase 1 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `28800`.
  public tunnel1Phase1LifetimeSeconds?: number;

  // The IPv4 CIDR on the AWS side of the VPN connection.
  public remoteIpv4NetworkCidr?: string;

  // Options for logging VPN tunnel activity. See Log Options below for more details.
  public tunnel1LogOptions?: ec2_VpnConnectionTunnel1LogOptions;

  // The lifetime for phase 2 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `3600`.
  public tunnel1Phase2LifetimeSeconds?: number;

  // The number of seconds after which a DPD timeout occurs for the second VPN tunnel. Valid value is equal or higher than `30`.
  public tunnel2DpdTimeoutSeconds?: number;

  // Options for logging VPN tunnel activity. See Log Options below for more details.
  public tunnel2LogOptions?: ec2_VpnConnectionTunnel2LogOptions;

  // The action to take when the establishing the tunnel for the second VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.
  public tunnel2StartupAction?: string;

  // The ARN of the core network.
  public coreNetworkArn?: string;

  // . The attachment ID of the Transit Gateway attachment to Direct Connect Gateway. The ID is obtained through a data source only.
  public transportTransitGatewayAttachmentId?: string;

  // The range of inside IPv6 addresses for the first VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.
  public tunnel1InsideIpv6Cidr?: string;

  // List of one or more integrity algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  public tunnel2Phase2IntegrityAlgorithms?: Array<string>;

  // The CIDR block of the inside IP addresses for the first VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.
  public tunnel1InsideCidr?: string;

  // The preshared key of the first VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).
  public tunnel1PresharedKey?: string;

  // The public IP address of the second VPN tunnel.
  public tunnel2Address?: string;

  // List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  public tunnel2Phase1EncryptionAlgorithms?: Array<string>;

  // List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  public tunnel1Phase1EncryptionAlgorithms?: Array<string>;

  // The percentage of the rekey window for the first VPN tunnel (determined by `tunnel1_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.
  public tunnel1RekeyFuzzPercentage?: number;

  // The CIDR block of the inside IP addresses for the second VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.
  public tunnel2InsideCidr?: string;

  // The number of packets in an IKE replay window for the second VPN tunnel. Valid value is between `64` and `2048`.
  public tunnel2ReplayWindowSize?: number;

  // The type of VPN connection. The only type AWS supports at this time is "ipsec.1".
  public type?: string;

  // The configuration information for the VPN connection's customer gateway (in the native XML format).
  public customerGatewayConfiguration?: string;

  // The public IP address of the first VPN tunnel.
  public tunnel1Address?: string;

  // Turn on or off tunnel endpoint lifecycle control feature for the first VPN tunnel. Valid values are `true | false`.
  public tunnel1EnableTunnelLifecycleControl?: boolean;

  // List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  public tunnel1Phase2DhGroupNumbers?: Array<number>;

  // List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  public tunnel1Phase2EncryptionAlgorithms?: Array<string>;

  // The bgp holdtime of the second VPN tunnel.
  public tunnel2BgpHoldtime?: number;

  // The bgp holdtime of the first VPN tunnel.
  public tunnel1BgpHoldtime?: number;

  // The RFC 6890 link-local address of the second VPN tunnel (Customer Gateway Side).
  public tunnel2CgwInsideAddress?: string;

  // List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  public tunnel2Phase2DhGroupNumbers?: Array<number>;

  // The RFC 6890 link-local address of the second VPN tunnel (VPN Gateway Side).
  public tunnel2VgwInsideAddress?: string;

  // Whether the VPN connection uses static routes exclusively. Static routes must be used for devices that don't support BGP.
  public staticRoutesOnly?: boolean;

  // The ID of the Virtual Private Gateway.
  public vpnGatewayId?: string;

  // The RFC 6890 link-local address of the first VPN tunnel (Customer Gateway Side).
  public tunnel1CgwInsideAddress?: string;

  // The range of inside IPv6 addresses for the second VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.
  public tunnel2InsideIpv6Cidr?: string;

  // Telemetry for the VPN tunnels. Detailed below.
  public vgwTelemetries?: Array<ec2_VpnConnectionVgwTelemetry>;

  // Indicates if a Public S2S VPN or Private S2S VPN over AWS Direct Connect. Valid values are `PublicIpv4 | PrivateIpv4`
  public outsideIpAddressType?: string;

  // Tags to apply to the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // One or more integrity algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.
  public tunnel2Phase1IntegrityAlgorithms?: Array<string>;

  // List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.
  public tunnel2Phase2EncryptionAlgorithms?: Array<string>;

  // The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the second VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel2_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel2_phase2_lifetime_seconds`.
  public tunnel2RekeyMarginTimeSeconds?: number;

  // When associated with an EC2 Transit Gateway (`transit_gateway_id` argument), the attachment ID. See also the `aws.ec2.Tag` resource for tagging the EC2 Transit Gateway VPN Attachment.
  public transitGatewayAttachmentId?: string;

  // The IKE versions that are permitted for the second VPN tunnel. Valid values are `ikev1 | ikev2`.
  public tunnel2IkeVersions?: Array<string>;

  // The percentage of the rekey window for the second VPN tunnel (determined by `tunnel2_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.
  public tunnel2RekeyFuzzPercentage?: number;

  // The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
  public localIpv4NetworkCidr?: string;

  // The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
  public localIpv6NetworkCidr?: string;

  // The static routes associated with the VPN connection. Detailed below.
  public routes?: Array<ec2_VpnConnectionRoute>;

  // The number of seconds after which a DPD timeout occurs for the first VPN tunnel. Valid value is equal or higher than `30`.
  public tunnel1DpdTimeoutSeconds?: number;

  // The action to take when the establishing the tunnel for the first VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.
  public tunnel1StartupAction?: string;

  // List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.
  public tunnel2Phase1DhGroupNumbers?: Array<number>;

  // The IKE versions that are permitted for the first VPN tunnel. Valid values are `ikev1 | ikev2`.
  public tunnel1IkeVersions?: Array<string>;

  // Turn on or off tunnel endpoint lifecycle control feature for the second VPN tunnel. Valid values are `true | false`.
  public tunnel2EnableTunnelLifecycleControl?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'tunnelInsideIpVersion',
        'Indicate whether the VPN tunnels process IPv4 or IPv6 traffic. Valid values are `ipv4 | ipv6`. `ipv6` Supports only EC2 Transit Gateway.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1IkeVersions',
        'The IKE versions that are permitted for the first VPN tunnel. Valid values are `ikev1 | ikev2`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'tunnel2EnableTunnelLifecycleControl',
        'Turn on or off tunnel endpoint lifecycle control feature for the second VPN tunnel. Valid values are `true | false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of VPN connection. The only type AWS supports at this time is "ipsec.1".',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'customerGatewayId',
        'The ID of the customer gateway.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1DpdTimeoutSeconds',
        'The number of seconds after which a DPD timeout occurs for the first VPN tunnel. Valid value is equal or higher than `30`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2ReplayWindowSize',
        'The number of packets in an IKE replay window for the second VPN tunnel. Valid value is between `64` and `2048`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase2DhGroupNumbers',
        'List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.',
        () => InputType_Number_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase2EncryptionAlgorithms',
        'List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase2EncryptionAlgorithms',
        'List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1Phase2LifetimeSeconds',
        'The lifetime for phase 2 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `3600`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'remoteIpv4NetworkCidr',
        'The IPv4 CIDR on the AWS side of the VPN connection.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2DpdTimeoutSeconds',
        'The number of seconds after which a DPD timeout occurs for the second VPN tunnel. Valid value is equal or higher than `30`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel1InsideCidr',
        'The CIDR block of the inside IP addresses for the first VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'remoteIpv6NetworkCidr',
        'The IPv6 CIDR on the AWS side of the VPN connection.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel1DpdTimeoutAction',
        'The action to take after DPD timeout occurs for the first VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1RekeyFuzzPercentage',
        'The percentage of the rekey window for the first VPN tunnel (determined by `tunnel1_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpnGatewayId',
        'The ID of the Virtual Private Gateway.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2Phase1LifetimeSeconds',
        'The lifetime for phase 1 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `28800`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2Phase2LifetimeSeconds',
        'The lifetime for phase 2 of the IKE negotiation for the second VPN tunnel, in seconds. Valid value is between `900` and `3600`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2RekeyMarginTimeSeconds',
        'The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the second VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel2_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel2_phase2_lifetime_seconds`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase2IntegrityAlgorithms',
        'List of one or more integrity algorithms that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel2InsideIpv6Cidr',
        'The range of inside IPv6 addresses for the second VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel2InsideCidr',
        'The CIDR block of the inside IP addresses for the second VPN tunnel. Valid value is a size /30 CIDR block from the 169.254.0.0/16 range.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tunnel1LogOptions',
        'Options for logging VPN tunnel activity. See Log Options below for more details.',
        () => ec2_VpnConnectionTunnel1LogOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase1DhGroupNumbers',
        'List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.',
        () => InputType_Number_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1Phase1LifetimeSeconds',
        'The lifetime for phase 1 of the IKE negotiation for the first VPN tunnel, in seconds. Valid value is between `900` and `28800`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase2IntegrityAlgorithms',
        'List of one or more integrity algorithms that are permitted for the first VPN tunnel for phase 2 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'localIpv6NetworkCidr',
        'The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableAcceleration',
        'Indicate whether to enable acceleration for the VPN connection. Supports only EC2 Transit Gateway.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel2PresharedKey',
        'The preshared key of the second VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase1DhGroupNumbers',
        'List of one or more Diffie-Hellman group numbers that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are ` 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.',
        () => InputType_Number_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2IkeVersions',
        'The IKE versions that are permitted for the second VPN tunnel. Valid values are `ikev1 | ikev2`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase1IntegrityAlgorithms',
        'One or more integrity algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase2DhGroupNumbers',
        'List of one or more Diffie-Hellman group numbers that are permitted for the second VPN tunnel for phase 2 IKE negotiations. Valid values are `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`.',
        () => InputType_Number_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'transportTransitGatewayAttachmentId',
        '. The attachment ID of the Transit Gateway attachment to Direct Connect Gateway. The ID is obtained through a data source only.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel1Phase1EncryptionAlgorithms',
        'List of one or more encryption algorithms that are permitted for the first VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tunnel2LogOptions',
        'Options for logging VPN tunnel activity. See Log Options below for more details.',
        () => ec2_VpnConnectionTunnel2LogOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel1StartupAction',
        'The action to take when the establishing the tunnel for the first VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1ReplayWindowSize',
        'The number of packets in an IKE replay window for the first VPN tunnel. Valid value is between `64` and `2048`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel2StartupAction',
        'The action to take when the establishing the tunnel for the second VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. Valid values are `add | start`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase1IntegrityAlgorithms',
        'One or more integrity algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel1RekeyMarginTimeSeconds',
        'The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the first VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `tunnel1_rekey_fuzz_percentage`. Valid value is between `60` and half of `tunnel1_phase2_lifetime_seconds`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'localIpv4NetworkCidr',
        'The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tunnel2Phase1EncryptionAlgorithms',
        'List of one or more encryption algorithms that are permitted for the second VPN tunnel for phase 1 IKE negotiations. Valid values are `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'tunnel2RekeyFuzzPercentage',
        'The percentage of the rekey window for the second VPN tunnel (determined by `tunnel2_rekey_margin_time_seconds`) during which the rekey time is randomly selected. Valid value is between `0` and `100`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'outsideIpAddressType',
        'Indicates if a Public S2S VPN or Private S2S VPN over AWS Direct Connect. Valid values are `PublicIpv4 | PrivateIpv4`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'staticRoutesOnly',
        "Whether the VPN connection uses static routes exclusively. Static routes must be used for devices that don't support BGP.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayId',
        'The ID of the EC2 Transit Gateway.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel1PresharedKey',
        'The preshared key of the first VPN tunnel. The preshared key must be between 8 and 64 characters in length and cannot start with zero(0). Allowed characters are alphanumeric characters, periods(.) and underscores(_).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel2DpdTimeoutAction',
        'The action to take after DPD timeout occurs for the second VPN tunnel. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. Valid values are `clear | none | restart`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tunnel1InsideIpv6Cidr',
        'The range of inside IPv6 addresses for the first VPN tunnel. Supports only EC2 Transit Gateway. Valid value is a size /126 CIDR block from the local fd00::/8 range.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'tunnel1EnableTunnelLifecycleControl',
        'Turn on or off tunnel endpoint lifecycle control feature for the first VPN tunnel. Valid values are `true | false`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
