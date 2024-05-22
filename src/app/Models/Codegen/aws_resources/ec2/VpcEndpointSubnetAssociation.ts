import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcEndpointSubnetAssociationArgs {
  // The ID of the VPC endpoint with which the subnet will be associated.
  vpcEndpointId?: string;

  // The ID of the subnet to be associated with the VPC endpoint.
  subnetId?: string;
}
export class VpcEndpointSubnetAssociation extends Resource {
  // The ID of the subnet to be associated with the VPC endpoint.
  public subnetId?: string;

  // The ID of the VPC endpoint with which the subnet will be associated.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "The ID of the VPC endpoint with which the subnet will be associated.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to be associated with the VPC endpoint.",
        [],
        true,
        true,
      ),
    ];
  }
}
