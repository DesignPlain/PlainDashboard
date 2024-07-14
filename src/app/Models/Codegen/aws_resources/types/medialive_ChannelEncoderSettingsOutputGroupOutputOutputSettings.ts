import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings {
  //
  hlsOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings;

  // Media package output settings. This can be set as an empty block.
  mediaPackageOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings;

  //
  msSmoothOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings;

  // Multiplex output settings. See Multiplex Output Settings for more details.
  multiplexOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings;

  // RTMP output settings. See RTMP Output Settings for more details.
  rtmpOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings;

  // UDP output settings. See UDP Output Settings for more details.
  udpOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings;

  // Archive output settings. See Archive Output Settings for more details.
  archiveOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings;

  //
  frameCaptureOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "msSmoothOutputSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "multiplexOutputSettings",
      "Multiplex output settings. See Multiplex Output Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rtmpOutputSettings",
      "RTMP output settings. See RTMP Output Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "udpOutputSettings",
      "UDP output settings. See UDP Output Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "archiveOutputSettings",
      "Archive output settings. See Archive Output Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "frameCaptureOutputSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hlsOutputSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mediaPackageOutputSettings",
      "Media package output settings. This can be set as an empty block.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMediaPackageOutputSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
