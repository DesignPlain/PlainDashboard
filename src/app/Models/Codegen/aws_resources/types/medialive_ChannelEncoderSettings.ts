import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroup,
  medialive_ChannelEncoderSettingsOutputGroup_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroup";
import {
  medialive_ChannelEncoderSettingsTimecodeConfig,
  medialive_ChannelEncoderSettingsTimecodeConfig_GetTypes,
} from "./medialive_ChannelEncoderSettingsTimecodeConfig";
import {
  medialive_ChannelEncoderSettingsMotionGraphicsConfiguration,
  medialive_ChannelEncoderSettingsMotionGraphicsConfiguration_GetTypes,
} from "./medialive_ChannelEncoderSettingsMotionGraphicsConfiguration";
import {
  medialive_ChannelEncoderSettingsVideoDescription,
  medialive_ChannelEncoderSettingsVideoDescription_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescription";
import {
  medialive_ChannelEncoderSettingsAudioDescription,
  medialive_ChannelEncoderSettingsAudioDescription_GetTypes,
} from "./medialive_ChannelEncoderSettingsAudioDescription";
import {
  medialive_ChannelEncoderSettingsNielsenConfiguration,
  medialive_ChannelEncoderSettingsNielsenConfiguration_GetTypes,
} from "./medialive_ChannelEncoderSettingsNielsenConfiguration";
import {
  medialive_ChannelEncoderSettingsAvailBlanking,
  medialive_ChannelEncoderSettingsAvailBlanking_GetTypes,
} from "./medialive_ChannelEncoderSettingsAvailBlanking";
import {
  medialive_ChannelEncoderSettingsCaptionDescription,
  medialive_ChannelEncoderSettingsCaptionDescription_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescription";
import {
  medialive_ChannelEncoderSettingsGlobalConfiguration,
  medialive_ChannelEncoderSettingsGlobalConfiguration_GetTypes,
} from "./medialive_ChannelEncoderSettingsGlobalConfiguration";

export interface medialive_ChannelEncoderSettings {
  // Settings for ad avail blanking. See Avail Blanking for more details.
  availBlanking?: medialive_ChannelEncoderSettingsAvailBlanking;

  // Settings for motion graphics. See Motion Graphics Configuration for more details.
  motionGraphicsConfiguration?: medialive_ChannelEncoderSettingsMotionGraphicsConfiguration;

  // Video Descriptions. See Video Descriptions for more details.
  videoDescriptions?: Array<medialive_ChannelEncoderSettingsVideoDescription>;

  // Audio descriptions for the channel. See Audio Descriptions for more details.
  audioDescriptions?: Array<medialive_ChannelEncoderSettingsAudioDescription>;

  // Caption Descriptions. See Caption Descriptions for more details.
  captionDescriptions?: Array<medialive_ChannelEncoderSettingsCaptionDescription>;

  // Configuration settings that apply to the event as a whole. See Global Configuration for more details.
  globalConfiguration?: medialive_ChannelEncoderSettingsGlobalConfiguration;

  // Nielsen configuration settings. See Nielsen Configuration for more details.
  nielsenConfiguration?: medialive_ChannelEncoderSettingsNielsenConfiguration;

  // Output groups for the channel. See Output Groups for more details.
  outputGroups?: Array<medialive_ChannelEncoderSettingsOutputGroup>;

  // Contains settings used to acquire and adjust timecode information from inputs. See Timecode Config for more details.
  timecodeConfig?: medialive_ChannelEncoderSettingsTimecodeConfig;
}

export function medialive_ChannelEncoderSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "motionGraphicsConfiguration",
      "Settings for motion graphics. See Motion Graphics Configuration for more details.",
      medialive_ChannelEncoderSettingsMotionGraphicsConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "videoDescriptions",
      "Video Descriptions. See Video Descriptions for more details.",
      medialive_ChannelEncoderSettingsVideoDescription_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "audioDescriptions",
      "Audio descriptions for the channel. See Audio Descriptions for more details.",
      medialive_ChannelEncoderSettingsAudioDescription_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "globalConfiguration",
      "Configuration settings that apply to the event as a whole. See Global Configuration for more details.",
      medialive_ChannelEncoderSettingsGlobalConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nielsenConfiguration",
      "Nielsen configuration settings. See Nielsen Configuration for more details.",
      medialive_ChannelEncoderSettingsNielsenConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "availBlanking",
      "Settings for ad avail blanking. See Avail Blanking for more details.",
      medialive_ChannelEncoderSettingsAvailBlanking_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "captionDescriptions",
      "Caption Descriptions. See Caption Descriptions for more details.",
      medialive_ChannelEncoderSettingsCaptionDescription_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outputGroups",
      "Output groups for the channel. See Output Groups for more details.",
      medialive_ChannelEncoderSettingsOutputGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timecodeConfig",
      "Contains settings used to acquire and adjust timecode information from inputs. See Timecode Config for more details.",
      medialive_ChannelEncoderSettingsTimecodeConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
