import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  allowPlaybackInterruption?: boolean;

  // The SSML text to be synthesized. For more information, see SSML.
  ssml?: string;

  // The raw text to be synthesized.
  text?: string;
}

export function diagflow_CxPageTransitionRouteTriggerFulfillmentMessageOutputAudioText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowPlaybackInterruption',
      "(Output)\nWhether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ssml',
      'The SSML text to be synthesized. For more information, see SSML.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'text',
      'The raw text to be synthesized.',
      () => [],
      false,
      false,
    ),
  ];
}
