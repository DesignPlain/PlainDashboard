import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ReservationShareSettings,
  Compute_ReservationShareSettings_GetTypes,
} from "../types/Compute_ReservationShareSettings";
import {
  Compute_ReservationSpecificReservation,
  Compute_ReservationSpecificReservation_GetTypes,
} from "../types/Compute_ReservationSpecificReservation";

export interface ReservationArgs {
  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  SpecificReservationRequired?: boolean;

  // The zone where the reservation is made.
  Zone?: string;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The share setting for reservations.
Structure is documented below.
*/
  ShareSettings?: Compute_ReservationShareSettings;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  SpecificReservation?: Compute_ReservationSpecificReservation;
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
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The share setting for reservations.
Structure is documented below.
*/
  public ShareSettings?: Compute_ReservationShareSettings;

  // The status of the reservation.
  public Status?: string;

  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  public SpecificReservationRequired?: boolean;

  // The zone where the reservation is made.
  public Zone?: string;

  /*
Full or partial URL to a parent commitment. This field displays for
reservations that are tied to a commitment.
*/
  public Commitment?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  public SpecificReservation?: Compute_ReservationSpecificReservation;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone where the reservation is made.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ShareSettings",
        "The share setting for reservations.\nStructure is documented below.",
        Compute_ReservationShareSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SpecificReservation",
        "Reservation for instances with specific machine shapes.\nStructure is documented below.",
        Compute_ReservationSpecificReservation_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "SpecificReservationRequired",
        "When set to true, only VMs that target this reservation by name can\nconsume this reservation. Otherwise, it can be consumed by VMs with\naffinity for any reservation. Defaults to false.",
        [],
        false,
        true,
      ),
    ];
  }
}
