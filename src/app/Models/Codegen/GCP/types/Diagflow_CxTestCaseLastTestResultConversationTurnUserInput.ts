import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput,
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnUserInput {
  // Whether sentiment analysis is enabled.
  EnableSentimentAnalysis?: boolean;

  // Parameters that need to be injected into the conversation during intent detection.
  InjectedParameters?: string;

  /*
User input. Supports text input, event input, dtmf input in the test case.
Structure is documented below.
*/
  Input?: Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput;

  // If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
  IsWebhookEnabled?: boolean;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnUserInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableSentimentAnalysis",
      "Whether sentiment analysis is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InjectedParameters",
      "Parameters that need to be injected into the conversation during intent detection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Input",
      "User input. Supports text input, event input, dtmf input in the test case.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsWebhookEnabled",
      "If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.",
      [],
      false,
      false,
    ),
  ];
}
