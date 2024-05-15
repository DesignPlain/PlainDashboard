import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_IntentFollowupIntentInfo {
  /*
The unique identifier of the followup intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  FollowupIntentName?: string;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  ParentFollowupIntentName?: string;
}

export function Diagflow_IntentFollowupIntentInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FollowupIntentName",
      "The unique identifier of the followup intent.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ParentFollowupIntentName",
      "The unique identifier of the parent intent in the chain of followup intents.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
      [],
      false,
      false,
    ),
  ];
}
