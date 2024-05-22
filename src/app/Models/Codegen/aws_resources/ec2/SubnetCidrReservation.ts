import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SubnetCidrReservationArgs {
  // A brief description of the reservation.
  description?: string;

  // The type of reservation to create. Valid values: `explicit`, `prefix`
  reservationType?: string;

  // The ID of the subnet to create the reservation for.
  subnetId?: string;

  // The CIDR block for the reservation.
  cidrBlock?: string;
}
export class SubnetCidrReservation extends Resource {
  // The CIDR block for the reservation.
  public cidrBlock?: string;

  // A brief description of the reservation.
  public description?: string;

  // ID of the AWS account that owns this CIDR reservation.
  public ownerId?: string;

  // The type of reservation to create. Valid values: `explicit`, `prefix`
  public reservationType?: string;

  // The ID of the subnet to create the reservation for.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the reservation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "reservationType",
        "The type of reservation to create. Valid values: `explicit`, `prefix`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to create the reservation for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The CIDR block for the reservation.",
        [],
        true,
        true,
      ),
    ];
  }
}
