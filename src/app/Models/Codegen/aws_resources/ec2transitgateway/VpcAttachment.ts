import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcAttachmentArgs {
  // Identifiers of EC2 Subnets.
  subnetIds?: Array<string>;

  // Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  transitGatewayDefaultRouteTablePropagation?: boolean;

  // Identifier of EC2 Transit Gateway.
  transitGatewayId?: string;

  // Whether Appliance Mode support is enabled. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. Valid values: `disable`, `enable`. Default value: `disable`.
  applianceModeSupport?: string;

  // Whether IPv6 support is enabled. Valid values: `disable`, `enable`. Default value: `disable`.
  ipv6Support?: string;

  // Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  transitGatewayDefaultRouteTableAssociation?: boolean;

  // Identifier of EC2 VPC.
  vpcId?: string;

  // Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  dnsSupport?: string;

  // Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcAttachment extends Resource {
  // Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  public transitGatewayDefaultRouteTablePropagation?: boolean;

  // Identifier of the AWS account that owns the EC2 VPC.
  public vpcOwnerId?: string;

  // Whether Appliance Mode support is enabled. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. Valid values: `disable`, `enable`. Default value: `disable`.
  public applianceModeSupport?: string;

  // Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  public transitGatewayDefaultRouteTableAssociation?: boolean;

  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  // Identifier of EC2 VPC.
  public vpcId?: string;

  // Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`.
  public dnsSupport?: string;

  // Whether IPv6 support is enabled. Valid values: `disable`, `enable`. Default value: `disable`.
  public ipv6Support?: string;

  // Identifiers of EC2 Subnets.
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "Identifier of EC2 VPC.",
        [],
        true,
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
        InputType.Map,
        "tags",
        "Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "Identifiers of EC2 Subnets.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitGatewayDefaultRouteTablePropagation",
        "Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayId",
        "Identifier of EC2 Transit Gateway.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6Support",
        "Whether IPv6 support is enabled. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applianceModeSupport",
        "Whether Appliance Mode support is enabled. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitGatewayDefaultRouteTableAssociation",
        "Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
