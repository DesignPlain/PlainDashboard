import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BiReservationPreferredTable } from "../types/BiReservationPreferredTable";

export interface BiReservationArgs {
  /*
LOCATION_DESCRIPTION


- - -
*/
  Location?: string;

  /*
Preferred tables to use BI capacity for.
Structure is documented below.
*/
  PreferredTables?: Array<BiReservationPreferredTable>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Size of a reservation, in bytes.
  Size?: number;
}
export class BiReservation extends Resource {
  /*
LOCATION_DESCRIPTION


- - -
*/
  public Location?: string;

  // The resource name of the singleton BI reservation. Reservation names have the form `projects/{projectId}/locations/{locationId}/biReservation`.
  public Name?: string;

  /*
Preferred tables to use BI capacity for.
Structure is documented below.
*/
  public PreferredTables?: Array<BiReservationPreferredTable>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Size of a reservation, in bytes.
  public Size?: number;

  /*
The last update timestamp of a reservation.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "LOCATION_DESCRIPTION\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PreferredTables",
        "Preferred tables to use BI capacity for.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Size",
        "Size of a reservation, in bytes.",
      ),
    ];
  }
}
