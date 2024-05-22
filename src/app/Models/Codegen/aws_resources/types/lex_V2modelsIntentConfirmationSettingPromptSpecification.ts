import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecification {
  // Maximum number of times the bot tries to elicit a response from the user using this prompt.
  maxRetries?: number;

  // Configuration block for messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup>;

  // How a message is selected from a message group among retries. Valid values are `Random` and `Ordered`.
  messageSelectionStrategy?: string;

  // Configuration block for advanced settings on each attempt of the prompt. See `prompt_attempts_specification`.
  promptAttemptsSpecifications?: Array<lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification>;

  // Whether the user can interrupt a speech prompt from the bot.
  allowInterrupt?: boolean;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Maximum number of times the bot tries to elicit a response from the user using this prompt.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "Configuration block for messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime. See `message_group`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageSelectionStrategy",
      "How a message is selected from a message group among retries. Valid values are `Random` and `Ordered`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "promptAttemptsSpecifications",
      "Configuration block for advanced settings on each attempt of the prompt. See `prompt_attempts_specification`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "Whether the user can interrupt a speech prompt from the bot.",
      [],
      false,
      false,
    ),
  ];
}
