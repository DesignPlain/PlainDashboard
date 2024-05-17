import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  AllowPlaybackInterruption?: boolean;

  // The SSML text to be synthesized. For more information, see SSML.
  Ssml?: string;

  // The raw text to be synthesized.
  Text?: string;
}

export function Diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowPlaybackInterruption",
      "(Output)\nWhether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ssml",
      "The SSML text to be synthesized. For more information, see SSML.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Text",
      "The raw text to be synthesized.",
      [],
      false,
      false,
    ),
  ];
}
