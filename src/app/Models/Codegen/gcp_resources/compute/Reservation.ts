import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_ReservationShareSettings,
  compute_ReservationShareSettings_GetTypes,
} from "../types/compute_ReservationShareSettings";
import {
  compute_ReservationSpecificReservation,
  compute_ReservationSpecificReservation_GetTypes,
} from "../types/compute_ReservationSpecificReservation";

export interface ReservationArgs {
  // An optional description of this resource.
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The share setting for reservations.
Structure is documented below.
*/
  shareSettings?: compute_ReservationShareSettings;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  specificReservation?: compute_ReservationSpecificReservation;

  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  specificReservationRequired?: boolean;

  // The zone where the reservation is made.
  zone?: string;
}
export class Reservation extends Resource {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // An optional description of this resource.
  public description?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The share setting for reservations.
Structure is documented below.
*/
  public shareSettings?: compute_ReservationShareSettings;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  public specificReservation?: compute_ReservationSpecificReservation;

  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  public specificReservationRequired?: boolean;

  // The status of the reservation.
  public status?: string;

  // The zone where the reservation is made.
  public zone?: string;

  /*
Full or partial URL to a parent commitment. This field displays for
reservations that are tied to a commitment.
*/
  public commitment?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shareSettings",
        "The share setting for reservations.\nStructure is documented below.",
        compute_ReservationShareSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "specificReservation",
        "Reservation for instances with specific machine shapes.\nStructure is documented below.",
        compute_ReservationSpecificReservation_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "specificReservationRequired",
        "When set to true, only VMs that target this reservation by name can\nconsume this reservation. Otherwise, it can be consumed by VMs with\naffinity for any reservation. Defaults to false.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone where the reservation is made.",
        [],
        true,
        true,
      ),
    ];
  }
}
