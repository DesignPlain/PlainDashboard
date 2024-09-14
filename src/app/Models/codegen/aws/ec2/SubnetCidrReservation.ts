import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SubnetCidrReservationArgs {
  // The ID of the subnet to create the reservation for.
  subnetId?: string;

  // The CIDR block for the reservation.
  cidrBlock?: string;

  // A brief description of the reservation.
  description?: string;

  // The type of reservation to create. Valid values: `explicit`, `prefix`
  reservationType?: string;
}
export class SubnetCidrReservation extends DS_Resource {
  // The type of reservation to create. Valid values: `explicit`, `prefix`
  public reservationType?: string;

  // The ID of the subnet to create the reservation for.
  public subnetId?: string;

  // The CIDR block for the reservation.
  public cidrBlock?: string;

  // A brief description of the reservation.
  public description?: string;

  // ID of the AWS account that owns this CIDR reservation.
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the reservation.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "reservationType",
        "The type of reservation to create. Valid values: `explicit`, `prefix`",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to create the reservation for.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The CIDR block for the reservation.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
