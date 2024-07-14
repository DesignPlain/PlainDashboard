import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelector,
  medialive_ChannelInputAttachmentInputSettingsAudioSelector_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsAudioSelector";
import {
  medialive_ChannelInputAttachmentInputSettingsVideoSelector,
  medialive_ChannelInputAttachmentInputSettingsVideoSelector_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsVideoSelector";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelector,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelector_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelector";
import {
  medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings,
  medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings";

export interface medialive_ChannelInputAttachmentInputSettings {
  //
  audioSelectors?: Array<medialive_ChannelInputAttachmentInputSettingsAudioSelector>;

  // Enable or disable the deblock filter when filtering.
  deblockFilter?: string;

  // Enable or disable the denoise filter when filtering.
  denoiseFilter?: string;

  // Turns on the filter for the input.
  inputFilter?: string;

  // Loop input if it is a file.
  sourceEndBehavior?: string;

  //
  videoSelector?: medialive_ChannelInputAttachmentInputSettingsVideoSelector;

  //
  captionSelectors?: Array<medialive_ChannelInputAttachmentInputSettingsCaptionSelector>;

  // Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
  filterStrength?: number;

  // Input settings. See Network Input Settings for more details.
  networkInputSettings?: medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings;

  // PID from which to read SCTE-35 messages.
  scte35Pid?: number;

  // Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in the input.
  smpte2038DataPreference?: string;
}

export function medialive_ChannelInputAttachmentInputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "filterStrength",
      "Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkInputSettings",
      "Input settings. See Network Input Settings for more details.",
      medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "smpte2038DataPreference",
      "Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in the input.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "audioSelectors",
      "",
      medialive_ChannelInputAttachmentInputSettingsAudioSelector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputFilter",
      "Turns on the filter for the input.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceEndBehavior",
      "Loop input if it is a file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "captionSelectors",
      "",
      medialive_ChannelInputAttachmentInputSettingsCaptionSelector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scte35Pid",
      "PID from which to read SCTE-35 messages.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deblockFilter",
      "Enable or disable the deblock filter when filtering.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "denoiseFilter",
      "Enable or disable the denoise filter when filtering.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "videoSelector",
      "",
      medialive_ChannelInputAttachmentInputSettingsVideoSelector_GetTypes(),
      false,
      false,
    ),
  ];
}
