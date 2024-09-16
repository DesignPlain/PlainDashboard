import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings {
  // Number of retry attempts.
  numRetries?: number;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;

  //
  salt?: string;

  //
  token?: string;

  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  //
  filecacheDuration?: number;

  //
  httpTransferMode?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsAkamaiSettings_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.String,
      'httpTransferMode',
      '',
      () => [],
      false,
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
    new DynamicUIProps(
      InputType.Number,
      'restartDelay',
      'Number of seconds to wait until a restart is initiated.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'salt', '', () => [], false, false),
    new DynamicUIProps(InputType.String, 'token', '', () => [], false, false),
  ];
}
