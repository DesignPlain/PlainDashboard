import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf,
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent,
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent";
import {
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText,
  Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText_GetTypes,
} from "./Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput {
  /*
The DTMF event to be handled.
Structure is documented below.
*/
  Dtmf?: Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf;

  /*
The event to be triggered.
Structure is documented below.
*/
  Event?: Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent;

  /*
The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.
*/
  LanguageCode?: string;

  /*
The natural language text to be processed.
Structure is documented below.
*/
  Text?: Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dtmf",
      "The DTMF event to be handled.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Event",
      "The event to be triggered.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LanguageCode",
      "The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.\nNote that queries in the same session do not necessarily need to specify the same language.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Text",
      "The natural language text to be processed.\nStructure is documented below.",
      Diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText_GetTypes(),
      false,
      false,
    ),
  ];
}
