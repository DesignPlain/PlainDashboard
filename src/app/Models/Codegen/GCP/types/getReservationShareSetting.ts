import { getReservationShareSettingProjectMap } from "./getReservationShareSettingProjectMap";

export interface getReservationShareSetting {
  // A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
  ProjectMaps?: Array<getReservationShareSettingProjectMap>;

  // Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]
  ShareType?: string;
}
