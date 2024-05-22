import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcAssociationAuthorizationArgs {
  // The VPC to authorize for association with the private hosted zone.
  vpcId?: string;

  // The VPC's region. Defaults to the region of the AWS provider.
  vpcRegion?: string;

  // The ID of the private hosted zone that you want to authorize associating a VPC with.
  zoneId?: string;
}
export class VpcAssociationAuthorization extends Resource {
  // The VPC's region. Defaults to the region of the AWS provider.
  public vpcRegion?: string;

  // The ID of the private hosted zone that you want to authorize associating a VPC with.
  public zoneId?: string;

  // The VPC to authorize for association with the private hosted zone.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The VPC to authorize for association with the private hosted zone.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcRegion",
        "The VPC's region. Defaults to the region of the AWS provider.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zoneId",
        "The ID of the private hosted zone that you want to authorize associating a VPC with.",
        [],
        true,
        true,
      ),
    ];
  }
}
