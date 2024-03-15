import { ReservationShareSettingsProjectMap } from "./ReservationShareSettingsProjectMap";

export interface ReservationShareSettings {
  /*
A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  ProjectMaps?: Array<ReservationShareSettingsProjectMap>;

  /*
Type of sharing for this shared-reservation
Possible values are: `LOCAL`, `SPECIFIC_PROJECTS`.
*/
  ShareType?: string;
}
