import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  AllowPlaybackInterruption?: boolean;

  // URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  AudioUri?: string;
}

export function Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessagePlayAudio_GetTypes(): DynamicUIProps[] {
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
      "AudioUri",
      "URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.",
      [],
      true,
      false,
    ),
  ];
}
