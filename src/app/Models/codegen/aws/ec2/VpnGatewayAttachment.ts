import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpnGatewayAttachmentArgs {
  // The ID of the VPC.
  vpcId?: string;

  // The ID of the Virtual Private Gateway.
  vpnGatewayId?: string;
}
export class VpnGatewayAttachment extends DS_Resource {
  // The ID of the VPC.
  public vpcId?: string;

  // The ID of the Virtual Private Gateway.
  public vpnGatewayId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The ID of the VPC.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpnGatewayId',
        'The ID of the Virtual Private Gateway.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
