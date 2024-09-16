import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings {
  // Number of retry attempts.
  numRetries?: number;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;

  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  //
  filecacheDuration?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'numRetries',
      'Number of retry attempts.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'restartDelay',
      'Number of seconds to wait until a restart is initiated.',
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
      InputType.Number,
      'filecacheDuration',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
