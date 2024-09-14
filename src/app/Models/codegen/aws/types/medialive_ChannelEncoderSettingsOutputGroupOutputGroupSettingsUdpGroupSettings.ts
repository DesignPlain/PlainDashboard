import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings {
  // Specifies behavior of last resort when input video os lost.
  inputLossAction?: string;

  // Indicates ID3 frame that has the timecode.
  timedMetadataId3Frame?: string;

  //
  timedMetadataId3Period?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsUdpGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputLossAction",
      "Specifies behavior of last resort when input video os lost.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataId3Frame",
      "Indicates ID3 frame that has the timecode.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timedMetadataId3Period",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
