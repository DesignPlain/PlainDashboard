import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getReservationShareSettingProjectMap,
  Compute_getReservationShareSettingProjectMap_GetTypes,
} from "./Compute_getReservationShareSettingProjectMap";

export interface Compute_getReservationShareSetting {
  // A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
  ProjectMaps?: Array<Compute_getReservationShareSettingProjectMap>;

  // Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]
  ShareType?: string;
}

export function Compute_getReservationShareSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ShareType",
      'Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ProjectMaps",
      "A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.",
      Compute_getReservationShareSettingProjectMap_GetTypes(),
      true,
      false,
    ),
  ];
}
