import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecification {
  // Whether the user can interrupt a speech prompt from the bot.
  allowInterrupt?: boolean;

  // Maximum number of times the bot tries to elicit a response from the user using this prompt.
  maxRetries?: number;

  // Configuration block for messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup>;

  // How a message is selected from a message group among retries. Valid values are `Random` and `Ordered`.
  messageSelectionStrategy?: string;

  // Configuration block for advanced settings on each attempt of the prompt. See `prompt_attempts_specification`.
  promptAttemptsSpecifications?: Array<lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification>;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Maximum number of times the bot tries to elicit a response from the user using this prompt.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "Configuration block for messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime. See `message_group`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageSelectionStrategy",
      "How a message is selected from a message group among retries. Valid values are `Random` and `Ordered`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "promptAttemptsSpecifications",
      "Configuration block for advanced settings on each attempt of the prompt. See `prompt_attempts_specification`.",
      () =>
        lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "Whether the user can interrupt a speech prompt from the bot.",
      () => [],
      false,
      false,
    ),
  ];
}
