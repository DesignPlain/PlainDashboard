import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup,
  lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup_GetTypes,
} from './lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup';

export interface lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse {
  // Whether the user can interrupt a speech response from Amazon Lex.
  allowInterrupt?: boolean;

  // Configuration blocks for responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup>;
}

export function lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowInterrupt',
      'Whether the user can interrupt a speech response from Amazon Lex.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'messageGroups',
      'Configuration blocks for responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime. See `message_group`.',
      () =>
        lex_V2modelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
