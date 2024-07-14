import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface NetworkAssociationArgs {
  // The ID of the Client VPN endpoint.
  clientVpnEndpointId?: string;

  // The ID of the subnet to associate with the Client VPN endpoint.
  subnetId?: string;
}
export class NetworkAssociation extends Resource {
  // The unique ID of the target network association.
  public associationId?: string;

  // The ID of the Client VPN endpoint.
  public clientVpnEndpointId?: string;

  // The ID of the subnet to associate with the Client VPN endpoint.
  public subnetId?: string;

  // The ID of the VPC in which the target subnet is located.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clientVpnEndpointId",
        "The ID of the Client VPN endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to associate with the Client VPN endpoint.",
        [],
        true,
        true,
      ),
    ];
  }
}
