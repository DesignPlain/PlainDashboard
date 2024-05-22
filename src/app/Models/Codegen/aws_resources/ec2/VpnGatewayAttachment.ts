import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpnGatewayAttachmentArgs {
  // The ID of the VPC.
  vpcId?: string;

  // The ID of the Virtual Private Gateway.
  vpnGatewayId?: string;
}
export class VpnGatewayAttachment extends Resource {
  // The ID of the VPC.
  public vpcId?: string;

  // The ID of the Virtual Private Gateway.
  public vpnGatewayId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpnGatewayId",
        "The ID of the Virtual Private Gateway.",
        [],
        true,
        true,
      ),
    ];
  }
}
