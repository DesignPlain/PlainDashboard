import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings {
  // A director and base filename where archive files should be written. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "A director and base filename where archive files should be written. See Destination for more details.",
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
