import { CxTestCaseLastTestResultConversationTurnUserInputInputText } from "./CxTestCaseLastTestResultConversationTurnUserInputInputText";
import { CxTestCaseLastTestResultConversationTurnUserInputInputDtmf } from "./CxTestCaseLastTestResultConversationTurnUserInputInputDtmf";
import { CxTestCaseLastTestResultConversationTurnUserInputInputEvent } from "./CxTestCaseLastTestResultConversationTurnUserInputInputEvent";

export interface CxTestCaseLastTestResultConversationTurnUserInputInput {
  /*
The natural language text to be processed.
Structure is documented below.
*/
  Text?: CxTestCaseLastTestResultConversationTurnUserInputInputText;

  /*
The DTMF event to be handled.
Structure is documented below.
*/
  Dtmf?: CxTestCaseLastTestResultConversationTurnUserInputInputDtmf;

  /*
The event to be triggered.
Structure is documented below.
*/
  Event?: CxTestCaseLastTestResultConversationTurnUserInputInputEvent;

  /*
The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.
*/
  LanguageCode?: string;
}
