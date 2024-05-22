import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InternetGatewayAttachmentArgs {
  // The ID of the internet gateway.
  internetGatewayId?: string;

  // The ID of the VPC.
  vpcId?: string;
}
export class InternetGatewayAttachment extends Resource {
  // The ID of the internet gateway.
  public internetGatewayId?: string;

  // The ID of the VPC.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "internetGatewayId",
        "The ID of the internet gateway.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC.",
        [],
        true,
        true,
      ),
    ];
  }
}
