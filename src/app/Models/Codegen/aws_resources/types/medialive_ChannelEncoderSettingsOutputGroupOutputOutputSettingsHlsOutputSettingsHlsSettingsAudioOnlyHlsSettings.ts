import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings {
  //
  audioGroupId?: string;

  //
  audioOnlyImage?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage;

  //
  audioTrackType?: string;

  //
  segmentType?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "segmentType", "", [], false, false),
    new DynamicUIProps(InputType.String, "audioGroupId", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "audioOnlyImage",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioTrackType",
      "",
      [],
      false,
      false,
    ),
  ];
}
