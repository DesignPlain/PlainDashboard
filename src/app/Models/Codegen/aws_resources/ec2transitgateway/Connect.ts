import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConnectArgs {
  // The underlaying VPC attachment
  transportAttachmentId?: string;

  // The tunnel protocol. Valid values: `gre`. Default is `gre`.
  protocol?: string;

  // Key-value tags for the EC2 Transit Gateway Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Boolean whether the Connect should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  transitGatewayDefaultRouteTableAssociation?: boolean;

  // Boolean whether the Connect should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  transitGatewayDefaultRouteTablePropagation?: boolean;

  // Identifier of EC2 Transit Gateway.
  transitGatewayId?: string;
}
export class Connect extends Resource {
  // Key-value tags for the EC2 Transit Gateway Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Boolean whether the Connect should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  public transitGatewayDefaultRouteTableAssociation?: boolean;

  // Boolean whether the Connect should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.
  public transitGatewayDefaultRouteTablePropagation?: boolean;

  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  // The underlaying VPC attachment
  public transportAttachmentId?: string;

  // The tunnel protocol. Valid values: `gre`. Default is `gre`.
  public protocol?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The tunnel protocol. Valid values: `gre`. Default is `gre`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the EC2 Transit Gateway Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitGatewayDefaultRouteTableAssociation",
        "Boolean whether the Connect should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitGatewayDefaultRouteTablePropagation",
        "Boolean whether the Connect should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`.",
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
        "transportAttachmentId",
        "The underlaying VPC attachment",
        [],
        true,
        true,
      ),
    ];
  }
}
