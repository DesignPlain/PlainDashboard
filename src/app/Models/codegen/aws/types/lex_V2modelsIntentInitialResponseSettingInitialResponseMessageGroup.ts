import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage';
import {
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation,
  lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation_GetTypes,
} from './lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation';

export interface lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroup {
  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage;

  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation>;
}

export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'message',
      'Configuration block for the primary message that Amazon Lex should send to the user. See `message`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'variations',
      'Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.',
      () =>
        lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
