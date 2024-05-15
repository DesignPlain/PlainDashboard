import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Discoveryengine_ChatEngineChatEngineMetadata {
  /*
(Output)
The resource name of a Dialogflow agent, that this Chat Engine refers to.
*/
  DialogflowAgent?: string;
}

export function Discoveryengine_ChatEngineChatEngineMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DialogflowAgent",
      "(Output)\nThe resource name of a Dialogflow agent, that this Chat Engine refers to.",
      [],
      false,
      false,
    ),
  ];
}
