import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcAttachmentAccepterArgs {
  // Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. Default value: `true`.
  transitGatewayDefaultRouteTablePropagation?: boolean;

  // Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the EC2 Transit Gateway Attachment to manage.
  transitGatewayAttachmentId?: string;

  // Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. Default value: `true`.
  transitGatewayDefaultRouteTableAssociation?: boolean;
}
export class VpcAttachmentAccepter extends DS_Resource {
  // Whether DNS support is enabled. Valid values: `disable`, `enable`.
  public dnsSupport?: string;

  // Whether IPv6 support is enabled. Valid values: `disable`, `enable`.
  public ipv6Support?: string;

  // Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. Default value: `true`.
  public transitGatewayDefaultRouteTableAssociation?: boolean;

  // Identifier of the AWS account that owns the EC2 VPC.
  public vpcOwnerId?: string;

  // Whether Appliance Mode support is enabled. Valid values: `disable`, `enable`.
  public applianceModeSupport?: string;

  // Identifiers of EC2 Subnets.
  public subnetIds?: Array<string>;

  // The ID of the EC2 Transit Gateway Attachment to manage.
  public transitGatewayAttachmentId?: string;

  // Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. Default value: `true`.
  public transitGatewayDefaultRouteTablePropagation?: boolean;

  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  // Identifier of EC2 VPC.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'transitGatewayDefaultRouteTablePropagation',
        'Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. Default value: `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayAttachmentId',
        'The ID of the EC2 Transit Gateway Attachment to manage.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'transitGatewayDefaultRouteTableAssociation',
        'Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. Default value: `true`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
