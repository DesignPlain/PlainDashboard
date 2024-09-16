import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings {
  // Setting to allow self signed or verified RTMP certificates.
  certificateMode?: string;

  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  // The RTMP endpoint excluding the stream name. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination;

  // Number of retry attempts.
  numRetries?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'certificateMode',
      'Setting to allow self signed or verified RTMP certificates.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'connectionRetryInterval',
      'Number of seconds to wait before retrying connection to the flash media server if the connection is lost.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'destination',
      'The RTMP endpoint excluding the stream name. See Destination for more details.',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'numRetries',
      'Number of retry attempts.',
      () => [],
      false,
      false,
    ),
  ];
}
