import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings";

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings {
  // Ancillary Source Settings. See Ancillary Source Settings for more details.
  ancillarySourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings;

  // ARIB Source Settings.
  aribSourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings;

  // DVB Sub Source Settings. See DVB Sub Source Settings for more details.
  dvbSubSourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings;

  // Embedded Source Settings. See Embedded Source Settings for more details.
  embeddedSourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings;

  // SCTE20 Source Settings. See SCTE 20 Source Settings for more details.
  scte20SourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings;

  // SCTE27 Source Settings. See SCTE 27 Source Settings for more details.
  scte27SourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings;

  // Teletext Source Settings. See Teletext Source Settings for more details.
  teletextSourceSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "teletextSourceSettings",
      "Teletext Source Settings. See Teletext Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ancillarySourceSettings",
      "Ancillary Source Settings. See Ancillary Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "aribSourceSettings",
      "ARIB Source Settings.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dvbSubSourceSettings",
      "DVB Sub Source Settings. See DVB Sub Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "embeddedSourceSettings",
      "Embedded Source Settings. See Embedded Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scte20SourceSettings",
      "SCTE20 Source Settings. See SCTE 20 Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scte27SourceSettings",
      "SCTE27 Source Settings. See SCTE 27 Source Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
