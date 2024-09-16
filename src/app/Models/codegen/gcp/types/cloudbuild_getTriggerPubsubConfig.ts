import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudbuild_getTriggerPubsubConfig {
  // Service account that will make the push request.
  serviceAccountEmail?: string;

  /*
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  state?: string;

  // Output only. Name of the subscription.
  subscription?: string;

  // The name of the topic from which this subscription is receiving messages.
  topic?: string;
}

export function cloudbuild_getTriggerPubsubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subscription',
      'Output only. Name of the subscription.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'topic',
      'The name of the topic from which this subscription is receiving messages.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountEmail',
      'Service account that will make the push request.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'Potential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.',
      () => [],
      true,
      false,
    ),
  ];
}
