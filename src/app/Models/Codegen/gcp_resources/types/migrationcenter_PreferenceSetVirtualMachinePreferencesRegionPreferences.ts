import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences {
  // A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.
  preferredRegions?: Array<string>;
}

export function migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "preferredRegions",
      "A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
