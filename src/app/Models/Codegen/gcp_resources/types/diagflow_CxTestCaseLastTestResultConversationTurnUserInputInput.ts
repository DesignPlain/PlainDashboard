import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent";
import {
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText,
  diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText_GetTypes,
} from "./diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText";

export interface diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput {
  /*
The DTMF event to be handled.
Structure is documented below.
*/
  dtmf?: diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf;

  /*
The event to be triggered.
Structure is documented below.
*/
  event?: diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent;

  /*
The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.
*/
  languageCode?: string;

  /*
The natural language text to be processed.
Structure is documented below.
*/
  text?: diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnUserInputInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dtmf",
      "The DTMF event to be handled.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputDtmf_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "event",
      "The event to be triggered.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputEvent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.\nNote that queries in the same session do not necessarily need to specify the same language.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "text",
      "The natural language text to be processed.\nStructure is documented below.",
      diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText_GetTypes(),
      false,
      false,
    ),
  ];
}
