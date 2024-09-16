import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudscheduler_JobPubsubTarget {
  /*
The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>--NOTE:--
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. `projects/my-project/topics/my-topic`.
*/
  topicName?: string;

  /*
Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
*/
  attributes?: Map<string, string>;

  /*
The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
A base64-encoded string.
*/
  data?: string;
}

export function cloudscheduler_JobPubsubTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'topicName',
      "The full resource name for the Cloud Pub/Sub topic to which\nmessages will be published when a job is delivered. ~>**NOTE:**\nThe topic name must be in the same format as required by PubSub's\nPublishRequest.name, e.g. `projects/my-project/topics/my-topic`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'attributes',
      'Attributes for PubsubMessage.\nPubsub message must contain either non-empty data, or at least one attribute.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'data',
      'The message payload for PubsubMessage.\nPubsub message must contain either non-empty data, or at least one attribute.\nA base64-encoded string.',
      () => [],
      false,
      false,
    ),
  ];
}
