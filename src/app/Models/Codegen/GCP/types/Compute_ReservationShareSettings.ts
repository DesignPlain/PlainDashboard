import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ReservationShareSettingsProjectMap,
  Compute_ReservationShareSettingsProjectMap_GetTypes,
} from "./Compute_ReservationShareSettingsProjectMap";

export interface Compute_ReservationShareSettings {
  /*
A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  ProjectMaps?: Array<Compute_ReservationShareSettingsProjectMap>;

  /*
Type of sharing for this shared-reservation
Possible values are: `LOCAL`, `SPECIFIC_PROJECTS`.
*/
  ShareType?: string;
}

export function Compute_ReservationShareSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ProjectMaps",
      "A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.\nStructure is documented below.",
      Compute_ReservationShareSettingsProjectMap_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ShareType",
      "Type of sharing for this shared-reservation\nPossible values are: `LOCAL`, `SPECIFIC_PROJECTS`.",
      [],
      false,
      false,
    ),
  ];
}
