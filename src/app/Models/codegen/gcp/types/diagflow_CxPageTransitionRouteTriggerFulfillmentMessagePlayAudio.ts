import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  allowPlaybackInterruption?: boolean;

  // URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  audioUri?: string;
}

export function diagflow_CxPageTransitionRouteTriggerFulfillmentMessagePlayAudio_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'audioUri',
      'URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowPlaybackInterruption',
      "(Output)\nWhether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.",
      () => [],
      false,
      false,
    ),
  ];
}
