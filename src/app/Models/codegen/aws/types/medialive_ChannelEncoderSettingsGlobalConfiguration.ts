import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior,
  medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior_GetTypes,
} from './medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior';

export interface medialive_ChannelEncoderSettingsGlobalConfiguration {
  // Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
  outputTimingSource?: string;

  // Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
  supportLowFramerateInputs?: string;

  // Value to set the initial audio gain for the Live Event.
  initialAudioGain?: number;

  // Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input. When “none” is configured the encoder will transcode either black, a solid color, or a user specified slate images per the “Input Loss Behavior” configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
  inputEndAction?: string;

  // Settings for system actions when input is lost. See Input Loss Behavior for more details.
  inputLossBehavior?: medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior;

  // Indicates how MediaLive pipelines are synchronized. PIPELINE\_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other. EPOCH\_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
  outputLockingMode?: string;
}

export function medialive_ChannelEncoderSettingsGlobalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'initialAudioGain',
      'Value to set the initial audio gain for the Live Event.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'inputEndAction',
      'Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input. When “none” is configured the encoder will transcode either black, a solid color, or a user specified slate images per the “Input Loss Behavior” configuration until the next input switch occurs (which is controlled through the Channel Schedule API).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'inputLossBehavior',
      'Settings for system actions when input is lost. See Input Loss Behavior for more details.',
      () =>
        medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputLockingMode',
      'Indicates how MediaLive pipelines are synchronized. PIPELINE\\_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other. EPOCH\\_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputTimingSource',
      'Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'supportLowFramerateInputs',
      'Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.',
      () => [],
      false,
      false,
    ),
  ];
}
