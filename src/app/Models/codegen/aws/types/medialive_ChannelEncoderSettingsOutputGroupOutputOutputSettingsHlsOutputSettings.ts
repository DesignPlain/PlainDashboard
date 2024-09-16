import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings {
  // String concatenated to the end of the destination filename. Required for multiple outputs of the same type.
  nameModifier?: string;

  //
  segmentModifier?: string;

  //
  h265PackagingType?: string;

  //
  hlsSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nameModifier',
      'String concatenated to the end of the destination filename. Required for multiple outputs of the same type.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'segmentModifier',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'h265PackagingType',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hlsSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettings_GetTypes(),
      true,
      false,
    ),
  ];
}
