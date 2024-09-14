import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2clientvpn_EndpointClientLoginBannerOptions,
  ec2clientvpn_EndpointClientLoginBannerOptions_GetTypes,
} from "../types/ec2clientvpn_EndpointClientLoginBannerOptions";
import {
  ec2clientvpn_EndpointClientConnectOptions,
  ec2clientvpn_EndpointClientConnectOptions_GetTypes,
} from "../types/ec2clientvpn_EndpointClientConnectOptions";
import {
  ec2clientvpn_EndpointAuthenticationOption,
  ec2clientvpn_EndpointAuthenticationOption_GetTypes,
} from "../types/ec2clientvpn_EndpointAuthenticationOption";
import {
  ec2clientvpn_EndpointConnectionLogOptions,
  ec2clientvpn_EndpointConnectionLogOptions_GetTypes,
} from "../types/ec2clientvpn_EndpointConnectionLogOptions";

export interface EndpointArgs {
  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A brief description of the Client VPN endpoint.
  description?: string;

  // The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
  securityGroupIds?: Array<string>;

  // The ARN of the ACM server certificate.
  serverCertificateArn?: string;

  // Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.
  splitTunnel?: boolean;

  // The transport protocol to be used by the VPN session. Default value is `udp`.
  transportProtocol?: string;

  // The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
  vpcId?: string;

  // The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.
  clientCidrBlock?: string;

  // Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
  clientLoginBannerOptions?: ec2clientvpn_EndpointClientLoginBannerOptions;

  // The maximum session duration is a trigger by which end-users are required to re-authenticate prior to establishing a VPN session. Default value is `24` - Valid values: `8 | 10 | 12 | 24`
  sessionTimeoutHours?: number;

  // The port number for the Client VPN endpoint. Valid values are `443` and `1194`. Default value is `443`.
  vpnPort?: number;

  // The options for managing connection authorization for new client connections.
  clientConnectOptions?: ec2clientvpn_EndpointClientConnectOptions;

  // Specify whether to enable the self-service portal for the Client VPN endpoint. Values can be `enabled` or `disabled`. Default value is `disabled`.
  selfServicePortal?: string;

  // Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the connecting device is used.
  dnsServers?: Array<string>;

  // Information about the authentication method to be used to authenticate clients.
  authenticationOptions?: Array<ec2clientvpn_EndpointAuthenticationOption>;

  // Information about the client connection logging options.
  connectionLogOptions?: ec2clientvpn_EndpointConnectionLogOptions;
}
export class Endpoint extends DS_Resource {
  // The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.
  public clientCidrBlock?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The transport protocol to be used by the VPN session. Default value is `udp`.
  public transportProtocol?: string;

  // The port number for the Client VPN endpoint. Valid values are `443` and `1194`. Default value is `443`.
  public vpnPort?: number;

  // The ARN of the Client VPN endpoint.
  public arn?: string;

  // Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
  public clientLoginBannerOptions?: ec2clientvpn_EndpointClientLoginBannerOptions;

  // Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the connecting device is used.
  public dnsServers?: Array<string>;

  // The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
  public securityGroupIds?: Array<string>;

  // The maximum session duration is a trigger by which end-users are required to re-authenticate prior to establishing a VPN session. Default value is `24` - Valid values: `8 | 10 | 12 | 24`
  public sessionTimeoutHours?: number;

  // Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.
  public splitTunnel?: boolean;

  // The options for managing connection authorization for new client connections.
  public clientConnectOptions?: ec2clientvpn_EndpointClientConnectOptions;

  // Information about the client connection logging options.
  public connectionLogOptions?: ec2clientvpn_EndpointConnectionLogOptions;

  // A brief description of the Client VPN endpoint.
  public description?: string;

  // The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
  public vpcId?: string;

  // Information about the authentication method to be used to authenticate clients.
  public authenticationOptions?: Array<ec2clientvpn_EndpointAuthenticationOption>;

  // The DNS name to be used by clients when establishing their VPN session.
  public dnsName?: string;

  // Specify whether to enable the self-service portal for the Client VPN endpoint. Values can be `enabled` or `disabled`. Default value is `disabled`.
  public selfServicePortal?: string;

  // The URL of the self-service portal.
  public selfServicePortalUrl?: string;

  // The ARN of the ACM server certificate.
  public serverCertificateArn?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the Client VPN endpoint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverCertificateArn",
        "The ARN of the ACM server certificate.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "sessionTimeoutHours",
        "The maximum session duration is a trigger by which end-users are required to re-authenticate prior to establishing a VPN session. Default value is `24` - Valid values: `8 | 10 | 12 | 24`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "selfServicePortal",
        "Specify whether to enable the self-service portal for the Client VPN endpoint. Values can be `enabled` or `disabled`. Default value is `disabled`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dnsServers",
        "Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the connecting device is used.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clientConnectOptions",
        "The options for managing connection authorization for new client connections.",
        () => ec2clientvpn_EndpointClientConnectOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "splitTunnel",
        "Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transportProtocol",
        "The transport protocol to be used by the VPN session. Default value is `udp`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authenticationOptions",
        "Information about the authentication method to be used to authenticate clients.",
        () => ec2clientvpn_EndpointAuthenticationOption_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "connectionLogOptions",
        "Information about the client connection logging options.",
        () => ec2clientvpn_EndpointConnectionLogOptions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientCidrBlock",
        "The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clientLoginBannerOptions",
        "Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.",
        () => ec2clientvpn_EndpointClientLoginBannerOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "vpnPort",
        "The port number for the Client VPN endpoint. Valid values are `443` and `1194`. Default value is `443`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
