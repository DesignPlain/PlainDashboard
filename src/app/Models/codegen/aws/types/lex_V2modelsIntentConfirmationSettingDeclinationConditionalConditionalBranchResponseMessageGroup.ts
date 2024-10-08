import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage';
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation';

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup {
  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage;

  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation>;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'message',
      'Configuration block for the primary message that Amazon Lex should send to the user. See `message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'variations',
      'Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.',
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
