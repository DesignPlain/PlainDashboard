import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf,
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent,
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent";
import {
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText,
  Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes,
} from "./Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText";

export interface Diagflow_CxTestCaseTestCaseConversationTurnUserInputInput {
  /*
The DTMF event to be handled.
Structure is documented below.
*/
  Dtmf?: Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf;

  /*
The event to be triggered.
Structure is documented below.
*/
  Event?: Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent;

  /*
The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.
*/
  LanguageCode?: string;

  /*
The natural language text to be processed.
Structure is documented below.
*/
  Text?: Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText;
}

export function Diagflow_CxTestCaseTestCaseConversationTurnUserInputInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dtmf",
      "The DTMF event to be handled.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputDtmf_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Event",
      "The event to be triggered.\nStructure is documented below.",
      Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputEvent_GetTypes(),
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
      Diagflow_CxTestCaseTestCaseConversationTurnUserInputInputText_GetTypes(),
      false,
      false,
    ),
  ];
}
