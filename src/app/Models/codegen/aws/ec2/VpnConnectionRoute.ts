import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpnConnectionRouteArgs {
  // The CIDR block associated with the local subnet of the customer network.
  destinationCidrBlock?: string;

  // The ID of the VPN connection.
  vpnConnectionId?: string;
}
export class VpnConnectionRoute extends DS_Resource {
  // The CIDR block associated with the local subnet of the customer network.
  public destinationCidrBlock?: string;

  // The ID of the VPN connection.
  public vpnConnectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationCidrBlock",
        "The CIDR block associated with the local subnet of the customer network.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpnConnectionId",
        "The ID of the VPN connection.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
