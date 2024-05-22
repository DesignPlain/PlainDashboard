import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getInternetGatewayAttachment {
  // Current state of the attachment between the gateway and the VPC. Present only if a VPC is attached
  state?: string;

  // ID of an attached VPC.
  vpcId?: string;
}

export function ec2_getInternetGatewayAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "Current state of the attachment between the gateway and the VPC. Present only if a VPC is attached",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "ID of an attached VPC.",
      [],
      true,
      false,
    ),
  ];
}
