import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting {
  // A director and base filename where archive files should be written. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination;

  // Number of seconds to write to archive file before closing and starting a new one.
  rolloverInterval?: number;

  // Parameters that control the interactions with the CDN. See Archive CDN Settings for more details.
  archiveCdnSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "A director and base filename where archive files should be written. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rolloverInterval",
      "Number of seconds to write to archive file before closing and starting a new one.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "archiveCdnSettings",
      "Parameters that control the interactions with the CDN. See Archive CDN Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSettingArchiveCdnSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
