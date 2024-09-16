import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chime_VoiceConnectorStreamingMediaInsightsConfiguration {
  // The media insights configuration that will be invoked by the Voice Connector.
  configurationArn?: string;

  // When `true`, the media insights configuration is not enabled. Defaults to `false`.
  disabled?: boolean;
}

export function chime_VoiceConnectorStreamingMediaInsightsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'configurationArn',
      'The media insights configuration that will be invoked by the Voice Connector.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'disabled',
      'When `true`, the media insights configuration is not enabled. Defaults to `false`.',
      () => [],
      false,
      false,
    ),
  ];
}
