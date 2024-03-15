import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ReservationShareSettings } from "../types/ReservationShareSettings";
import { ReservationSpecificReservation } from "../types/ReservationSpecificReservation";

export interface ReservationArgs {
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
  ShareSettings?: ReservationShareSettings;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  SpecificReservation?: ReservationSpecificReservation;

  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  SpecificReservationRequired?: boolean;

  // The zone where the reservation is made.
  Zone?: string;
}
export class Reservation extends Resource {
  /*
Full or partial URL to a parent commitment. This field displays for
reservations that are tied to a commitment.
*/
  public Commitment?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  // The status of the reservation.
  public Status?: string;

  // The zone where the reservation is made.
  public Zone?: string;

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

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The share setting for reservations.
Structure is documented below.
*/
  public ShareSettings?: ReservationShareSettings;

  /*
Reservation for instances with specific machine shapes.
Structure is documented below.
*/
  public SpecificReservation?: ReservationSpecificReservation;

  /*
When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
*/
  public SpecificReservationRequired?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShareSettings",
        "The share setting for reservations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SpecificReservation",
        "Reservation for instances with specific machine shapes.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "SpecificReservationRequired",
        "When set to true, only VMs that target this reservation by name can\nconsume this reservation. Otherwise, it can be consumed by VMs with\naffinity for any reservation. Defaults to false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone where the reservation is made.",
      ),
    ];
  }
}
