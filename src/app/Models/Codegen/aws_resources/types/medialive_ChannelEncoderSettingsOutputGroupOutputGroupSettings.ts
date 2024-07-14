import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings {
  //
  multiplexGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings;

  // RTMP group settings. See RTMP Group Settings for more details.
  rtmpGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings;

  //
  udpGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings;

  // Archive group settings. See Archive Group Settings for more details.
  archiveGroupSettings?: Array<medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting>;

  //
  frameCaptureGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings;

  //
  hlsGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings;

  // Media package group settings. See Media Package Group Settings for more details.
  mediaPackageGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings;

  //
  msSmoothGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "hlsGroupSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mediaPackageGroupSettings",
      "Media package group settings. See Media Package Group Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMediaPackageGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "msSmoothGroupSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "multiplexGroupSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMultiplexGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rtmpGroupSettings",
      "RTMP group settings. See RTMP Group Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "udpGroupSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "archiveGroupSettings",
      "Archive group settings. See Archive Group Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsArchiveGroupSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "frameCaptureGroupSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
