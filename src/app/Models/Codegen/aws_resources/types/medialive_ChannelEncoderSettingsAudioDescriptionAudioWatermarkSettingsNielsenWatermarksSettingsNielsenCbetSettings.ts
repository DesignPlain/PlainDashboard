import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings {
  //
  cbetCheckDigitString?: string;

  // Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
  cbetStepaside?: string;

  // CBET source ID to use in the watermark.
  csid?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cbetCheckDigitString",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cbetStepaside",
      "Determines the method of CBET insertion mode when prior encoding is detected on the same layer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "csid",
      "CBET source ID to use in the watermark.",
      [],
      true,
      false,
    ),
  ];
}
