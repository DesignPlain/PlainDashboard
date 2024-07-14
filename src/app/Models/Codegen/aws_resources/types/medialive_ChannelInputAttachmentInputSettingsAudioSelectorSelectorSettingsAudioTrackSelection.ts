import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode";
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack";

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection {
  // Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337. See Dolby E Decode for more details.
  dolbyEDecode?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode;

  // Selects one or more unique audio tracks from within a source. See Audio Tracks for more details.
  tracks?: Array<medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack>;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tracks",
      "Selects one or more unique audio tracks from within a source. See Audio Tracks for more details.",
      medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dolbyEDecode",
      "Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337. See Dolby E Decode for more details.",
      medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode_GetTypes(),
      false,
      false,
    ),
  ];
}
