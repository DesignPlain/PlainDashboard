import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsBotLocaleVoiceSettings {
  // Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. Valid values are `standard` and `neural`. If not specified, the default is `standard`.
  engine?: string;

  // Identifier of the Amazon Polly voice to use.
  voiceId?: string;
}

export function lex_V2modelsBotLocaleVoiceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'voiceId',
      'Identifier of the Amazon Polly voice to use.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'engine',
      'Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. Valid values are `standard` and `neural`. If not specified, the default is `standard`.',
      () => [],
      false,
      false,
    ),
  ];
}
