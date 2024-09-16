import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouteTableAssociationArgs {
  // Boolean whether the Gateway Attachment should remove any current Route Table association before associating with the specified Route Table. Default value: `false`. This argument is intended for use with EC2 Transit Gateways shared into the current account, otherwise the `transit_gateway_default_route_table_association` argument of the `aws.ec2transitgateway.VpcAttachment` resource should be used.
  replaceExistingAssociation?: boolean;

  // Identifier of EC2 Transit Gateway Attachment.
  transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Route Table.
  transitGatewayRouteTableId?: string;
}
export class RouteTableAssociation extends DS_Resource {
  // Boolean whether the Gateway Attachment should remove any current Route Table association before associating with the specified Route Table. Default value: `false`. This argument is intended for use with EC2 Transit Gateways shared into the current account, otherwise the `transit_gateway_default_route_table_association` argument of the `aws.ec2transitgateway.VpcAttachment` resource should be used.
  public replaceExistingAssociation?: boolean;

  // Identifier of the resource
  public resourceId?: string;

  // Type of the resource
  public resourceType?: string;

  // Identifier of EC2 Transit Gateway Attachment.
  public transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Route Table.
  public transitGatewayRouteTableId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'transitGatewayAttachmentId',
        'Identifier of EC2 Transit Gateway Attachment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayRouteTableId',
        'Identifier of EC2 Transit Gateway Route Table.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'replaceExistingAssociation',
        'Boolean whether the Gateway Attachment should remove any current Route Table association before associating with the specified Route Table. Default value: `false`. This argument is intended for use with EC2 Transit Gateways shared into the current account, otherwise the `transit_gateway_default_route_table_association` argument of the `aws.ec2transitgateway.VpcAttachment` resource should be used.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
