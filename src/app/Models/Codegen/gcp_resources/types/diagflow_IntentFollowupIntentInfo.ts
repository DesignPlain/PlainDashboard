import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_IntentFollowupIntentInfo {
  /*
The unique identifier of the followup intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  followupIntentName?: string;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  parentFollowupIntentName?: string;
}

export function diagflow_IntentFollowupIntentInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "followupIntentName",
      "The unique identifier of the followup intent.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parentFollowupIntentName",
      "The unique identifier of the parent intent in the chain of followup intents.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
  ];
}
