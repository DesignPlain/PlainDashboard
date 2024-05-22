import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TransitGatewayArgs {
  // Whether VPN Equal Cost Multipath Protocol support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  vpnEcmpSupport?: string;

  /*
Private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is `64512` to `65534` for 16-bit ASNs and `4200000000` to `4294967294` for 32-bit ASNs. Default value: `64512`.

> --NOTE:-- Modifying `amazon_side_asn` on a Transit Gateway with active BGP sessions is [not allowed](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayOptions.html). You must first delete all Transit Gateway attachments that have BGP configured prior to modifying `amazon_side_asn`.
*/
  amazonSideAsn?: number;

  // Whether resource attachment requests are automatically accepted. Valid values: `disable`, `enable`. Default value: `disable`.
  autoAcceptSharedAttachments?: string;

  // Whether resource attachments are automatically associated with the default association route table. Valid values: `disable`, `enable`. Default value: `enable`.
  defaultRouteTableAssociation?: string;

  // Whether resource attachments automatically propagate routes to the default propagation route table. Valid values: `disable`, `enable`. Default value: `enable`.
  defaultRouteTablePropagation?: string;

  // Description of the EC2 Transit Gateway.
  description?: string;

  // Whether Multicast support is enabled. Required to use `ec2_transit_gateway_multicast_domain`. Valid values: `disable`, `enable`. Default value: `disable`.
  multicastSupport?: string;

  // Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  dnsSupport?: string;

  // Key-value tags for the EC2 Transit Gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.
  transitGatewayCidrBlocks?: Array<string>;
}
export class TransitGateway extends Resource {
  // Whether resource attachments automatically propagate routes to the default propagation route table. Valid values: `disable`, `enable`. Default value: `enable`.
  public defaultRouteTablePropagation?: string;

  // Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  public dnsSupport?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Identifier of the default association route table
  public associationDefaultRouteTableId?: string;

  // Description of the EC2 Transit Gateway.
  public description?: string;

  // Identifier of the default propagation route table
  public propagationDefaultRouteTableId?: string;

  // Key-value tags for the EC2 Transit Gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether VPN Equal Cost Multipath Protocol support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  public vpnEcmpSupport?: string;

  // One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.
  public transitGatewayCidrBlocks?: Array<string>;

  /*
Private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is `64512` to `65534` for 16-bit ASNs and `4200000000` to `4294967294` for 32-bit ASNs. Default value: `64512`.

> --NOTE:-- Modifying `amazon_side_asn` on a Transit Gateway with active BGP sessions is [not allowed](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayOptions.html). You must first delete all Transit Gateway attachments that have BGP configured prior to modifying `amazon_side_asn`.
*/
  public amazonSideAsn?: number;

  // EC2 Transit Gateway Amazon Resource Name (ARN)
  public arn?: string;

  // Whether resource attachment requests are automatically accepted. Valid values: `disable`, `enable`. Default value: `disable`.
  public autoAcceptSharedAttachments?: string;

  // Whether resource attachments are automatically associated with the default association route table. Valid values: `disable`, `enable`. Default value: `enable`.
  public defaultRouteTableAssociation?: string;

  // Whether Multicast support is enabled. Required to use `ec2_transit_gateway_multicast_domain`. Valid values: `disable`, `enable`. Default value: `disable`.
  public multicastSupport?: string;

  // Identifier of the AWS account that owns the EC2 Transit Gateway
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the EC2 Transit Gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoAcceptSharedAttachments",
        "Whether resource attachment requests are automatically accepted. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "multicastSupport",
        "Whether Multicast support is enabled. Required to use `ec2_transit_gateway_multicast_domain`. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dnsSupport",
        "Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRouteTablePropagation",
        "Whether resource attachments automatically propagate routes to the default propagation route table. Valid values: `disable`, `enable`. Default value: `enable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the EC2 Transit Gateway.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "transitGatewayCidrBlocks",
        "One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpnEcmpSupport",
        "Whether VPN Equal Cost Multipath Protocol support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "amazonSideAsn",
        "Private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is `64512` to `65534` for 16-bit ASNs and `4200000000` to `4294967294` for 32-bit ASNs. Default value: `64512`.\n\n> **NOTE:** Modifying `amazon_side_asn` on a Transit Gateway with active BGP sessions is [not allowed](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayOptions.html). You must first delete all Transit Gateway attachments that have BGP configured prior to modifying `amazon_side_asn`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRouteTableAssociation",
        "Whether resource attachments are automatically associated with the default association route table. Valid values: `disable`, `enable`. Default value: `enable`.",
        [],
        false,
        false,
      ),
    ];
  }
}
