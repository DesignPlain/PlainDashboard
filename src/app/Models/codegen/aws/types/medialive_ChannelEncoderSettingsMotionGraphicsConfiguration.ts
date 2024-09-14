import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings,
  medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings";

export interface medialive_ChannelEncoderSettingsMotionGraphicsConfiguration {
  // Motion Graphics Insertion.
  motionGraphicsInsertion?: string;

  // Motion Graphics Settings. See Motion Graphics Settings for more details.
  motionGraphicsSettings?: medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings;
}

export function medialive_ChannelEncoderSettingsMotionGraphicsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "motionGraphicsSettings",
      "Motion Graphics Settings. See Motion Graphics Settings for more details.",
      () =>
        medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "motionGraphicsInsertion",
      "Motion Graphics Insertion.",
      () => [],
      false,
      false,
    ),
  ];
}
