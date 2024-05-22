import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_ReservationShareSettingsProjectMap,
  compute_ReservationShareSettingsProjectMap_GetTypes,
} from "./compute_ReservationShareSettingsProjectMap";

export interface compute_ReservationShareSettings {
  /*
A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  projectMaps?: Array<compute_ReservationShareSettingsProjectMap>;

  /*
Type of sharing for this shared-reservation
Possible values are: `LOCAL`, `SPECIFIC_PROJECTS`.
*/
  shareType?: string;
}

export function compute_ReservationShareSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "projectMaps",
      "A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.\nStructure is documented below.",
      compute_ReservationShareSettingsProjectMap_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "shareType",
      "Type of sharing for this shared-reservation\nPossible values are: `LOCAL`, `SPECIFIC_PROJECTS`.",
      [],
      false,
      false,
    ),
  ];
}
