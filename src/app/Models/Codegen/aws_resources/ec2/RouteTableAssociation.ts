import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RouteTableAssociationArgs {
  // The ID of the routing table to associate with.
  routeTableId?: string;

  // The subnet ID to create an association. Conflicts with `gateway_id`.
  subnetId?: string;

  // The gateway ID to create an association. Conflicts with `subnet_id`.
  gatewayId?: string;
}
export class RouteTableAssociation extends Resource {
  // The subnet ID to create an association. Conflicts with `gateway_id`.
  public subnetId?: string;

  // The gateway ID to create an association. Conflicts with `subnet_id`.
  public gatewayId?: string;

  // The ID of the routing table to associate with.
  public routeTableId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "The ID of the routing table to associate with.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The subnet ID to create an association. Conflicts with `gateway_id`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayId",
        "The gateway ID to create an association. Conflicts with `subnet_id`.",
        [],
        false,
        true,
      ),
    ];
  }
}
