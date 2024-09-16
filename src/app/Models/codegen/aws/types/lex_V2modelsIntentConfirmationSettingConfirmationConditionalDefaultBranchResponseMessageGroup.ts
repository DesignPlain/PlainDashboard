import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation';
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage';

export interface lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup {
  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation>;

  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'variations',
      'Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'message',
      'Configuration block for the primary message that Amazon Lex should send to the user. See `message`.',
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
  ];
}
