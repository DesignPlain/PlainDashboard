import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingElicitationCodeHook,
  lex_V2modelsIntentConfirmationSettingElicitationCodeHook_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingElicitationCodeHook";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponse,
  lex_V2modelsIntentConfirmationSettingConfirmationResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationResponse";
import {
  lex_V2modelsIntentConfirmationSettingFailureResponse,
  lex_V2modelsIntentConfirmationSettingFailureResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureResponse";
import {
  lex_V2modelsIntentConfirmationSettingFailureNextStep,
  lex_V2modelsIntentConfirmationSettingFailureNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureNextStep";
import {
  lex_V2modelsIntentConfirmationSettingCodeHook,
  lex_V2modelsIntentConfirmationSettingCodeHook_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHook";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationConditional,
  lex_V2modelsIntentConfirmationSettingConfirmationConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationConditional";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditional,
  lex_V2modelsIntentConfirmationSettingDeclinationConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditional";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationNextStep,
  lex_V2modelsIntentConfirmationSettingDeclinationNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationNextStep";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationResponse,
  lex_V2modelsIntentConfirmationSettingDeclinationResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationResponse";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecification,
  lex_V2modelsIntentConfirmationSettingPromptSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecification";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationNextStep,
  lex_V2modelsIntentConfirmationSettingConfirmationNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationNextStep";
import {
  lex_V2modelsIntentConfirmationSettingFailureConditional,
  lex_V2modelsIntentConfirmationSettingFailureConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingFailureConditional";

export interface lex_V2modelsIntentConfirmationSetting {
  // Configuration block for when the code hook is invoked during confirmation prompt retries. See `elicitation_code_hook`.
  elicitationCodeHook?: lex_V2modelsIntentConfirmationSettingElicitationCodeHook;

  // Configuration block for the next step to take in the conversation if the confirmation step fails. See `failure_next_step`.
  failureNextStep?: lex_V2modelsIntentConfirmationSettingFailureNextStep;

  // Configuration block for the intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `invoke_dialog_code_hook`.  See `code_hook`.
  codeHook?: lex_V2modelsIntentConfirmationSettingCodeHook;

  // Configuration block for conditional branches to evaluate after the intent is closed. See `confirmation_conditional`.
  confirmationConditional?: lex_V2modelsIntentConfirmationSettingConfirmationConditional;

  // Configuration block for conditional branches to evaluate after the intent is declined. See `declination_conditional`.
  declinationConditional?: lex_V2modelsIntentConfirmationSettingDeclinationConditional;

  // Configuration block for the next step that the bot executes when the customer declines the intent. See `declination_next_step`.
  declinationNextStep?: lex_V2modelsIntentConfirmationSettingDeclinationNextStep;

  // Configuration block for when the user answers "no" to the question defined in `prompt_specification`, Amazon Lex responds with this response to acknowledge that the intent was canceled. See `declination_response`.
  declinationResponse?: lex_V2modelsIntentConfirmationSettingDeclinationResponse;

  // Configuration block for prompting the user to confirm the intent. This question should have a yes or no answer. Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. See `prompt_specification`.
  promptSpecification?: lex_V2modelsIntentConfirmationSettingPromptSpecification;

  // Whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the active field isn't specified, the default is true.
  active?: boolean;

  // Configuration block for the next step that the bot executes when the customer confirms the intent. See `confirmation_next_step`.
  confirmationNextStep?: lex_V2modelsIntentConfirmationSettingConfirmationNextStep;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `confirmation_response`.
  confirmationResponse?: lex_V2modelsIntentConfirmationSettingConfirmationResponse;

  // Configuration block for conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. See `failure_conditional`.
  failureConditional?: lex_V2modelsIntentConfirmationSettingFailureConditional;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.
  failureResponse?: lex_V2modelsIntentConfirmationSettingFailureResponse;
}

export function lex_V2modelsIntentConfirmationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "failureNextStep",
      "Configuration block for the next step to take in the conversation if the confirmation step fails. See `failure_next_step`.",
      lex_V2modelsIntentConfirmationSettingFailureNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeHook",
      "Configuration block for the intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `invoke_dialog_code_hook`.  See `code_hook`.",
      lex_V2modelsIntentConfirmationSettingCodeHook_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confirmationConditional",
      "Configuration block for conditional branches to evaluate after the intent is closed. See `confirmation_conditional`.",
      lex_V2modelsIntentConfirmationSettingConfirmationConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "declinationResponse",
      'Configuration block for when the user answers "no" to the question defined in `prompt_specification`, Amazon Lex responds with this response to acknowledge that the intent was canceled. See `declination_response`.',
      lex_V2modelsIntentConfirmationSettingDeclinationResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "promptSpecification",
      "Configuration block for prompting the user to confirm the intent. This question should have a yes or no answer. Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. See `prompt_specification`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confirmationResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `confirmation_response`.",
      lex_V2modelsIntentConfirmationSettingConfirmationResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureConditional",
      "Configuration block for conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. See `failure_conditional`.",
      lex_V2modelsIntentConfirmationSettingFailureConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "elicitationCodeHook",
      "Configuration block for when the code hook is invoked during confirmation prompt retries. See `elicitation_code_hook`.",
      lex_V2modelsIntentConfirmationSettingElicitationCodeHook_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "declinationNextStep",
      "Configuration block for the next step that the bot executes when the customer declines the intent. See `declination_next_step`.",
      lex_V2modelsIntentConfirmationSettingDeclinationNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the active field isn't specified, the default is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confirmationNextStep",
      "Configuration block for the next step that the bot executes when the customer confirms the intent. See `confirmation_next_step`.",
      lex_V2modelsIntentConfirmationSettingConfirmationNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.",
      lex_V2modelsIntentConfirmationSettingFailureResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "declinationConditional",
      "Configuration block for conditional branches to evaluate after the intent is declined. See `declination_conditional`.",
      lex_V2modelsIntentConfirmationSettingDeclinationConditional_GetTypes(),
      false,
      false,
    ),
  ];
}
