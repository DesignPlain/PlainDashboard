import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TransitGatewayRegistrationArgs {
  // The ID of the Global Network to register to.
  globalNetworkId?: string;

  // The ARN of the Transit Gateway to register.
  transitGatewayArn?: string;
}
export class TransitGatewayRegistration extends DS_Resource {
  // The ID of the Global Network to register to.
  public globalNetworkId?: string;

  // The ARN of the Transit Gateway to register.
  public transitGatewayArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the Global Network to register to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayArn",
        "The ARN of the Transit Gateway to register.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
