import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput";

export interface diagflow_CxTestCaseLastTestResultConversationTurnUserInput {
  // Parameters that need to be injected into the conversation during intent detection.
  injectedParameters?: string;

  /*
User input. Supports text input, event input, dtmf input in the test case.
Structure is documented below.
*/
  input?: diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput;

  // If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
  isWebhookEnabled?: boolean;

  // Whether sentiment analysis is enabled.
  enableSentimentAnalysis?: boolean;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "injectedParameters",
      "Parameters that need to be injected into the conversation during intent detection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "input",
      "User input. Supports text input, event input, dtmf input in the test case.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isWebhookEnabled",
      "If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSentimentAnalysis",
      "Whether sentiment analysis is enabled.",
      [],
      false,
      false,
    ),
  ];
}
