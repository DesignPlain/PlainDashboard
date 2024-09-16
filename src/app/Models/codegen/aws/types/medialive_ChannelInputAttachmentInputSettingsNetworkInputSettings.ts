import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings,
  medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings';

export interface medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings {
  // Specifies HLS input settings when the uri is for a HLS manifest. See HLS Input Settings for more details.
  hlsInputSettings?: medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings;

  // Check HTTPS server certificates.
  serverValidation?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsNetworkInputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'hlsInputSettings',
      'Specifies HLS input settings when the uri is for a HLS manifest. See HLS Input Settings for more details.',
      () =>
        medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serverValidation',
      'Check HTTPS server certificates.',
      () => [],
      false,
      false,
    ),
  ];
}
