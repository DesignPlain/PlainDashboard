import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouteTablePropagationArgs {
  // Identifier of EC2 Transit Gateway Attachment.
  transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Route Table.
  transitGatewayRouteTableId?: string;
}
export class RouteTablePropagation extends DS_Resource {
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
    ];
  }
}
