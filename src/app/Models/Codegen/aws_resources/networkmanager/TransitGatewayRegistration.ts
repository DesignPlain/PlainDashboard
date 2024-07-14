import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TransitGatewayRegistrationArgs {
  // The ID of the Global Network to register to.
  globalNetworkId?: string;

  // The ARN of the Transit Gateway to register.
  transitGatewayArn?: string;
}
export class TransitGatewayRegistration extends Resource {
  // The ID of the Global Network to register to.
  public globalNetworkId?: string;

  // The ARN of the Transit Gateway to register.
  public transitGatewayArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "transitGatewayArn",
        "The ARN of the Transit Gateway to register.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the Global Network to register to.",
        [],
        true,
        true,
      ),
    ];
  }
}
