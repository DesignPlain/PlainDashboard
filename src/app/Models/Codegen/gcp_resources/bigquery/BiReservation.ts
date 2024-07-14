import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigquery_BiReservationPreferredTable,
  bigquery_BiReservationPreferredTable_GetTypes,
} from "../types/bigquery_BiReservationPreferredTable";

export interface BiReservationArgs {
  /*
LOCATION_DESCRIPTION


- - -
*/
  location?: string;

  /*
Preferred tables to use BI capacity for.
Structure is documented below.
*/
  preferredTables?: Array<bigquery_BiReservationPreferredTable>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Size of a reservation, in bytes.
  size?: number;
}
export class BiReservation extends Resource {
  /*
Preferred tables to use BI capacity for.
Structure is documented below.
*/
  public preferredTables?: Array<bigquery_BiReservationPreferredTable>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Size of a reservation, in bytes.
  public size?: number;

  /*
The last update timestamp of a reservation.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
LOCATION_DESCRIPTION


- - -
*/
  public location?: string;

  // The resource name of the singleton BI reservation. Reservation names have the form `projects/{projectId}/locations/{locationId}/biReservation`.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "preferredTables",
        "Preferred tables to use BI capacity for.\nStructure is documented below.",
        bigquery_BiReservationPreferredTable_GetTypes(),
        false,
        false,
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
        InputType.Number,
        "size",
        "Size of a reservation, in bytes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "LOCATION_DESCRIPTION\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
