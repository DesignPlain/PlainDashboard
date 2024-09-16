import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getReservationShareSettingProjectMap,
  compute_getReservationShareSettingProjectMap_GetTypes,
} from './compute_getReservationShareSettingProjectMap';

export interface compute_getReservationShareSetting {
  // A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
  projectMaps?: Array<compute_getReservationShareSettingProjectMap>;

  // Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]
  shareType?: string;
}

export function compute_getReservationShareSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'shareType',
      'Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'projectMaps',
      "A map of project number and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.",
      () => compute_getReservationShareSettingProjectMap_GetTypes(),
      true,
      false,
    ),
  ];
}
