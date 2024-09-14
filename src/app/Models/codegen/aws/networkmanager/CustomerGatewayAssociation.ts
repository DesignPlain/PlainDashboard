import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CustomerGatewayAssociationArgs {
  // The ID of the link.
  linkId?: string;

  // The Amazon Resource Name (ARN) of the customer gateway.
  customerGatewayArn?: string;

  // The ID of the device.
  deviceId?: string;

  // The ID of the global network.
  globalNetworkId?: string;
}
export class CustomerGatewayAssociation extends DS_Resource {
  // The Amazon Resource Name (ARN) of the customer gateway.
  public customerGatewayArn?: string;

  // The ID of the device.
  public deviceId?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The ID of the link.
  public linkId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "linkId",
        "The ID of the link.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerGatewayArn",
        "The Amazon Resource Name (ARN) of the customer gateway.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deviceId",
        "The ID of the device.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the global network.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
