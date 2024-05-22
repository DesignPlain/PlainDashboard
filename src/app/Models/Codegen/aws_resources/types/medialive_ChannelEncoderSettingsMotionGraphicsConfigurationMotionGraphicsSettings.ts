import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings,
  medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings";

export interface medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings {
  // Html Motion Graphics Settings.
  htmlMotionGraphicsSettings?: medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings;
}

export function medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "htmlMotionGraphicsSettings",
      "Html Motion Graphics Settings.",
      medialive_ChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
