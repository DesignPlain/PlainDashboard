import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MainRouteTableAssociationArgs {
  /*
The ID of the Route Table to set as the new
main route table for the target VPC
*/
  routeTableId?: string;

  // The ID of the VPC whose main route table should be set
  vpcId?: string;
}
export class MainRouteTableAssociation extends Resource {
  // Used internally, see --Notes-- below
  public originalRouteTableId?: string;

  /*
The ID of the Route Table to set as the new
main route table for the target VPC
*/
  public routeTableId?: string;

  // The ID of the VPC whose main route table should be set
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "The ID of the Route Table to set as the new\nmain route table for the target VPC",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC whose main route table should be set",
        [],
        true,
        false,
      ),
    ];
  }
}
