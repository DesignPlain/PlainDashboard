import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings";

export interface medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings {
  // TTML Destination Settings. See TTML Destination Settings for more details.
  ttmlDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings;

  // Burn In Destination Settings. See Burn In Destination Settings for more details.
  burnInDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings;

  // DVB Sub Destination Settings. See DVB Sub Destination Settings for more details.
  dvbSubDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings;

  // Embedded Destination Settings.
  embeddedDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings;

  // Embedded Plus SCTE20 Destination Settings.
  embeddedPlusScte20DestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings;

  // SCTE20 Plus Embedded Destination Settings.
  scte20PlusEmbeddedDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings;

  // SCTE27 Destination Settings.
  scte27DestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings;

  // ARIB Destination Settings.
  aribDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings;

  // EBU TT D Destination Settings. See EBU TT D Destination Settings for more details.
  ebuTtDDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings;

  // RTMP Caption Info Destination Settings.
  rtmpCaptionInfoDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings;

  // SMPTE TT Destination Settings.
  smpteTtDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings;

  // Teletext Destination Settings.
  teletextDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings;

  // WebVTT Destination Settings. See WebVTT Destination Settings for more details.
  webvttDestinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings;
}

export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ttmlDestinationSettings",
      "TTML Destination Settings. See TTML Destination Settings for more details.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "burnInDestinationSettings",
      "Burn In Destination Settings. See Burn In Destination Settings for more details.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "embeddedPlusScte20DestinationSettings",
      "Embedded Plus SCTE20 Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedPlusScte20DestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scte20PlusEmbeddedDestinationSettings",
      "SCTE20 Plus Embedded Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte20PlusEmbeddedDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "aribDestinationSettings",
      "ARIB Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsAribDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rtmpCaptionInfoDestinationSettings",
      "RTMP Caption Info Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsRtmpCaptionInfoDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "smpteTtDestinationSettings",
      "SMPTE TT Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsSmpteTtDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "webvttDestinationSettings",
      "WebVTT Destination Settings. See WebVTT Destination Settings for more details.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dvbSubDestinationSettings",
      "DVB Sub Destination Settings. See DVB Sub Destination Settings for more details.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsDvbSubDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "embeddedDestinationSettings",
      "Embedded Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEmbeddedDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scte27DestinationSettings",
      "SCTE27 Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsScte27DestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ebuTtDDestinationSettings",
      "EBU TT D Destination Settings. See EBU TT D Destination Settings for more details.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsEbuTtDDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "teletextDestinationSettings",
      "Teletext Destination Settings.",
      medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTeletextDestinationSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
