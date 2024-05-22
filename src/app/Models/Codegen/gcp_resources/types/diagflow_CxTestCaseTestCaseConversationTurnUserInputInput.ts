import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent,
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent";
import {
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText,
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText";
import {
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf,
  diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf_GetTypes,
} from "./diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf";

export interface diagflow_CxTestCaseTestCaseConversationTurnUserInputInput {
  /*
The event to be triggered.
Structure is documented below.
*/
  event?: diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent;

  /*
The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.
*/
  languageCode?: string;

  /*
The natural language text to be processed.
Structure is documented below.
*/
  text?: diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText;

  /*
The DTMF event to be handled.
Structure is documented below.
*/
  dtmf?: diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf;
}

export function diagflow_CxTestCaseTestCaseConversationTurnUserInputInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "event",
      "The event to be triggered.\nStructure is documented below.",
      diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes(),
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
      diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dtmf",
      "The DTMF event to be handled.\nStructure is documented below.",
      diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf_GetTypes(),
      false,
      false,
    ),
  ];
}
