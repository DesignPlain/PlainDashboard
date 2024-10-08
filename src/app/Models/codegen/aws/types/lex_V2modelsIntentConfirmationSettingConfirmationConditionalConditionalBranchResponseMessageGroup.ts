import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage';

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup {
  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation>;

  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'variations',
      'Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'message',
      'Configuration block for the primary message that Amazon Lex should send to the user. See `message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalConditionalBranchResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
  ];
}
