import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcEndpointRouteTableAssociationArgs {
  // Identifier of the EC2 Route Table to be associated with the VPC Endpoint.
  routeTableId?: string;

  // Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.
  vpcEndpointId?: string;
}
export class VpcEndpointRouteTableAssociation extends DS_Resource {
  // Identifier of the EC2 Route Table to be associated with the VPC Endpoint.
  public routeTableId?: string;

  // Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "Identifier of the EC2 Route Table to be associated with the VPC Endpoint.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
