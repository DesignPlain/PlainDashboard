import { CxTestCaseLastTestResultConversationTurnUserInputInput } from "./CxTestCaseLastTestResultConversationTurnUserInputInput";

export interface CxTestCaseLastTestResultConversationTurnUserInput {
  // Whether sentiment analysis is enabled.
  EnableSentimentAnalysis?: boolean;

  // Parameters that need to be injected into the conversation during intent detection.
  InjectedParameters?: string;

  /*
User input. Supports text input, event input, dtmf input in the test case.
Structure is documented below.
*/
  Input?: CxTestCaseLastTestResultConversationTurnUserInputInput;

  // If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
  IsWebhookEnabled?: boolean;
}
